import { type BioSection } from "@/data/bioDataContent";

interface BioDataSectionProps {
  section: BioSection;
}

export function BioDataSection({ section }: BioDataSectionProps) {
  return (
    <div className="mb-2">
      <h2 className="font-serif text-xl md:text-2xl text-bio-maroon mb-5 sm:mb-6 text-center tracking-wide">
        {section.title}
      </h2>

      {section.type === "details" && section.items && (
        <div className="max-w-md mx-auto space-y-3">
          {section.items.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-2 sm:gap-4 items-baseline"
            >
              <span className="text-bio-brown-light text-sm font-medium">
                {item.label}
              </span>
              <span className="text-bio-brown">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {section.type === "list" && section.groups && (
        <div className="space-y-5 max-w-xl mx-auto">
          {section.groups.map((group, gi) => (
            <div key={gi}>
              {group.subtitle && (
                <h3 className="text-bio-gold font-medium text-xs sm:text-sm uppercase tracking-wider mb-3 pl-4">
                  {group.subtitle}
                </h3>
              )}
              <ul className="space-y-2">
                {group.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-bio-brown text-sm sm:text-base leading-relaxed"
                  >
                    <span className="text-bio-gold-light mt-[7px] sm:mt-2 text-[5px] sm:text-[6px] shrink-0">
                      ●
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
