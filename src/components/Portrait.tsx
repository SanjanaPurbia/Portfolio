import { profile } from '../data/portfolio'

// Shows profile.photo when set; until then, a display-type monogram (no fake imagery).
export function Portrait() {
  if (profile.photo) {
    return (
      <img
        src={profile.photo}
        alt={`Portrait of ${profile.name}`}
        width={800}
        height={1000}
        fetchPriority="high"
        className="aspect-[4/5] w-full rounded-tile object-cover"
      />
    )
  }
  return (
    <div
      role="img"
      aria-label={`${profile.name} monogram`}
      className="relative flex aspect-[4/3] w-full md:aspect-[4/5] items-end overflow-hidden rounded-tile bg-feature p-6 md:p-8"
    >
      <span
        aria-hidden="true"
        className="absolute -top-[0.18em] -right-[0.06em] font-display text-[clamp(160px,22vw,300px)] leading-none font-semibold tracking-[-0.06em] text-on-feature/15"
      >
        SP
      </span>
      <span className="relative font-display text-[21px] leading-snug font-medium text-on-feature">
        {profile.role}
        <br />
        AWS Certified Cloud Practitioner
      </span>
    </div>
  )
}
