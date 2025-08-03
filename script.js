// WebGL Background Setup
class WebGLBackground {
    constructor() {
        this.canvas = document.getElementById('bgCanvas');
        this.gl = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl');
        
        if (!this.gl) {
            console.warn('WebGL not supported, falling back to CSS background');
            return;
        }

        this.mouseX = 0;
        this.mouseY = 0;
        this.spheres = [
            { x: -0.5, y: 0.3, radius: 0.3, color: [0.0, 0.8, 0.4] },
            { x: 0.6, y: -0.4, radius: 0.25, color: [0.4, 0.2, 0.8] },
            { x: 0.0, y: 0.8, radius: 0.2, color: [0.8, 0.4, 0.2] }
        ];

        this.resize();
        this.initShaders();
        this.initBuffers();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.canvas.addEventListener('mouseenter', () => this.handleMouseEnter());
        this.canvas.addEventListener('mouseleave', () => this.handleMouseLeave());
    }

    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouseX = (e.clientX - rect.left) / rect.width * 2 - 1;
        this.mouseY = -(e.clientY - rect.top) / rect.height * 2 + 1;
    }

    handleMouseEnter() {
        this.mouseActive = true;
    }

    handleMouseLeave() {
        this.mouseActive = false;
    }

    resize() {
        this.canvas.width = window.innerWidth * window.devicePixelRatio;
        this.canvas.height = window.innerHeight * window.devicePixelRatio;
        this.canvas.style.width = window.innerWidth + 'px';
        this.canvas.style.height = window.innerHeight + 'px';
        
        if (this.gl) {
            this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
        }
    }

    initShaders() {
        const vertexShader = `
            attribute vec2 a_position;
            attribute vec2 a_texCoord;
            varying vec2 v_texCoord;
            uniform mat3 u_matrix;
            
            void main() {
                gl_Position = vec4((u_matrix * vec3(a_position, 1.0)).xy, 0.0, 1.0);
                v_texCoord = a_texCoord;
            }
        `;

        const fragmentShader = `
            precision mediump float;
            uniform float u_time;
            uniform vec2 u_resolution;
            uniform vec2 u_mouse;
            uniform float u_mouseActive;
            varying vec2 v_texCoord;
            
            void main() {
                vec2 uv = v_texCoord;
                vec2 p = (2.0 * uv - 1.0) * vec2(u_resolution.x / u_resolution.y, 1.0);
                
                float t = u_time * 0.3;
                vec3 col = vec3(0.0);
                
                // Create multiple interactive spheres
                vec3 sphere1 = vec3(-0.5, 0.3, 0.3);
                vec3 sphere2 = vec3(0.6, -0.4, 0.25);
                vec3 sphere3 = vec3(0.0, 0.8, 0.2);
                
                // Sphere 1 - Bright White
                float dist1 = length(p - sphere1.xy);
                float sphere1Glow = smoothstep(sphere1.z, sphere1.z * 0.8, dist1);
                vec3 sphere1Color = vec3(1.0, 1.0, 1.0);
                
                // Sphere 2 - Bright White
                float dist2 = length(p - sphere2.xy);
                float sphere2Glow = smoothstep(sphere2.z, sphere2.z * 0.8, dist2);
                vec3 sphere2Color = vec3(1.0, 1.0, 1.0);
                
                // Sphere 3 - Bright White
                float dist3 = length(p - sphere3.xy);
                float sphere3Glow = smoothstep(sphere3.z, sphere3.z * 0.8, dist3);
                vec3 sphere3Color = vec3(1.0, 1.0, 1.0);
                
                // Mouse interaction
                float mouseDist = length(p - u_mouse);
                float mouseInfluence = smoothstep(0.5, 0.0, mouseDist) * u_mouseActive;
                
                // Add stars around spheres
                for(float i = 0.0; i < 12.0; i++) {
                    float angle = i * 3.14159 * 2.0 / 12.0;
                    
                    // Stars around sphere 1
                    vec2 starPos1 = sphere1.xy + vec2(cos(angle + t), sin(angle + t * 0.7)) * (sphere1.z + 0.1);
                    float starDist1 = length(p - starPos1);
                    float star1 = smoothstep(0.015, 0.0, starDist1);
                    col += vec3(0.0, 1.0, 0.5) * star1 * 0.8;
                    
                    // Stars around sphere 2
                    vec2 starPos2 = sphere2.xy + vec2(cos(angle - t * 0.5), sin(angle - t * 0.8)) * (sphere2.z + 0.1);
                    float starDist2 = length(p - starPos2);
                    float star2 = smoothstep(0.015, 0.0, starDist2);
                    col += vec3(1.0, 0.3, 1.0) * star2 * 0.8;
                    
                    // Stars around sphere 3
                    vec2 starPos3 = sphere3.xy + vec2(cos(angle + t * 0.3), sin(angle + t * 1.2)) * (sphere3.z + 0.1);
                    float starDist3 = length(p - starPos3);
                    float star3 = smoothstep(0.015, 0.0, starDist3);
                    col += vec3(1.0, 0.6, 0.2) * star3 * 0.8;
                }
                
                // Add sphere glows with mouse interaction
                col += sphere1Color * sphere1Glow * (2.0 + mouseInfluence * 1.0);
                col += sphere2Color * sphere2Glow * (2.0 + mouseInfluence * 1.0);
                col += sphere3Color * sphere3Glow * (2.0 + mouseInfluence * 1.0);
                
                // Add floating stars
                for(float i = 0.0; i < 8.0; i++) {
                    vec2 starPos = vec2(
                        sin(t * 0.5 + i * 1.5) * 2.0,
                        cos(t * 0.3 + i * 2.0) * 2.0
                    );
                    float starDist = length(p - starPos);
                    float star = smoothstep(0.008, 0.0, starDist);
                    col += vec3(1.0, 1.0, 0.8) * star * 1.5;
                }
                
                // Add connection lines between spheres when mouse is near
                if(u_mouseActive > 0.0) {
                    float line1 = smoothstep(0.02, 0.0, abs(dot(normalize(sphere1.xy - sphere2.xy), p - sphere1.xy)));
                    float line2 = smoothstep(0.02, 0.0, abs(dot(normalize(sphere2.xy - sphere3.xy), p - sphere2.xy)));
                    float line3 = smoothstep(0.02, 0.0, abs(dot(normalize(sphere3.xy - sphere1.xy), p - sphere3.xy)));
                    
                    col += vec3(0.0, 1.0, 1.0) * (line1 + line2 + line3) * 1.0 * mouseInfluence;
                }
                
                // Add subtle grid pattern
                vec2 grid = abs(sin(p * 15.0));
                float gridPattern = smoothstep(0.95, 0.98, grid.x + grid.y);
                col += vec3(0.0, 0.5, 1.0) * gridPattern * 0.2;
                
                gl_FragColor = vec4(col, 0.4);
            }
        `;

        this.program = this.createProgram(vertexShader, fragmentShader);
        this.gl.useProgram(this.program);
        
        this.timeLocation = this.gl.getUniformLocation(this.program, 'u_time');
        this.resolutionLocation = this.gl.getUniformLocation(this.program, 'u_resolution');
        this.mouseLocation = this.gl.getUniformLocation(this.program, 'u_mouse');
        this.mouseActiveLocation = this.gl.getUniformLocation(this.program, 'u_mouseActive');
        this.matrixLocation = this.gl.getUniformLocation(this.program, 'u_matrix');
    }

    createShader(type, source) {
        const shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error('Shader compilation error:', this.gl.getShaderInfoLog(shader));
            this.gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    createProgram(vertexShader, fragmentShader) {
        const program = this.gl.createProgram();
        this.gl.attachShader(program, this.createShader(this.gl.VERTEX_SHADER, vertexShader));
        this.gl.attachShader(program, this.createShader(this.gl.FRAGMENT_SHADER, fragmentShader));
        this.gl.linkProgram(program);
        
        if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
            console.error('Program linking error:', this.gl.getProgramInfoLog(program));
            return null;
        }
        return program;
    }

    initBuffers() {
        const positions = new Float32Array([
            -1, -1,
             1, -1,
            -1,  1,
             1,  1,
        ]);

        const texCoords = new Float32Array([
            0, 0,
            1, 0,
            0, 1,
            1, 1,
        ]);

        this.positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, positions, this.gl.STATIC_DRAW);

        this.texCoordBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texCoordBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, texCoords, this.gl.STATIC_DRAW);

        this.gl.enable(this.gl.BLEND);
        this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA);
    }

    animate() {
        const time = performance.now() * 0.001;
        
        this.gl.uniform1f(this.timeLocation, time);
        this.gl.uniform2f(this.resolutionLocation, this.canvas.width, this.canvas.height);
        this.gl.uniform2f(this.mouseLocation, this.mouseX, this.mouseY);
        this.gl.uniform1f(this.mouseActiveLocation, this.mouseActive ? 1.0 : 0.0);
        
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        const positionLocation = this.gl.getAttribLocation(this.program, 'a_position');
        this.gl.enableVertexAttribArray(positionLocation);
        this.gl.vertexAttribPointer(positionLocation, 2, this.gl.FLOAT, false, 0, 0);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texCoordBuffer);
        const texCoordLocation = this.gl.getAttribLocation(this.program, 'a_texCoord');
        this.gl.enableVertexAttribArray(texCoordLocation);
        this.gl.vertexAttribPointer(texCoordLocation, 2, this.gl.FLOAT, false, 0, 0);

        this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, 4);
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize WebGL Background
let webglBackground;
document.addEventListener('DOMContentLoaded', () => {
    webglBackground = new WebGLBackground();
});

// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Improved smooth scrolling with proper offset calculation
function smoothScrollTo(targetId, duration = 1000) {
    const targetElement = document.querySelector(targetId);
    if (!targetElement) {
        console.warn('Target element not found:', targetId);
        return;
    }

    const navbarHeight = 70; // Fixed navbar height
    const targetPosition = targetElement.offsetTop - navbarHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        smoothScrollTo(targetId);
    });
});

// Active navigation highlighting with improved intersection observer
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
    threshold: 0.3,
    rootMargin: '-20% 0px -20% 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 255, 136, 0.1)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// Skills animation enhancement
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.1) translateY(-5px)';
        item.style.boxShadow = '0 10px 25px rgba(0, 255, 136, 0.4)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1) translateY(0)';
        item.style.boxShadow = '0 0 15px rgba(0, 255, 136, 0.3)';
    });
});

// Timeline animation enhancement
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.5 });

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

// Achievement cards animation
const achievementCards = document.querySelectorAll('.achievement-card');
const achievementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.3 });

achievementCards.forEach(card => {
    achievementObserver.observe(card);
});

// Mouse trail effect
let mouseTrail = [];
const maxTrailLength = 15;

document.addEventListener('mousemove', (e) => {
    mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    if (mouseTrail.length > maxTrailLength) {
        mouseTrail.shift();
    }
    
    // Create trail effect
    mouseTrail.forEach((point, index) => {
        const opacity = (index / mouseTrail.length) * 0.4;
        const size = (index / mouseTrail.length) * 8;
        
        if (index % 2 === 0) {
            const dot = document.createElement('div');
            dot.style.position = 'fixed';
            dot.style.left = point.x + 'px';
            dot.style.top = point.y + 'px';
            dot.style.width = size + 'px';
            dot.style.height = size + 'px';
            dot.style.background = `rgba(0, 255, 136, ${opacity})`;
            dot.style.borderRadius = '50%';
            dot.style.pointerEvents = 'none';
            dot.style.zIndex = '9999';
            dot.style.transition = 'all 0.1s ease';
            dot.style.boxShadow = `0 0 ${size * 2}px rgba(0, 255, 136, ${opacity * 0.5})`;
            
            document.body.appendChild(dot);
            
            setTimeout(() => {
                dot.style.opacity = '0';
                setTimeout(() => dot.remove(), 100);
            }, 50);
        }
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations here
}, 16)); // ~60fps 