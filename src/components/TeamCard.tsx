import { Mail, ExternalLink } from "lucide-react";
import { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group rounded-lg overflow-hidden bg-white border border-border hover:border-accent hover:shadow-lg transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-1">
          <h3 className="text-lg font-serif font-medium text-foreground">
            {member.name}
          </h3>
          <p className="text-sm font-medium text-accent">{member.role}</p>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {member.bio}
        </p>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
          {member.expertise.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
            >
              {skill}
            </span>
          ))}
          {member.expertise.length > 3 && (
            <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground">
              +{member.expertise.length - 3} more
            </span>
          )}
        </div>

        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center gap-2 text-xs font-medium text-accent hover:text-foreground transition-colors mt-4"
          >
            <Mail size={16} />
            Contact
          </a>
        )}
      </div>
    </div>
  );
}
