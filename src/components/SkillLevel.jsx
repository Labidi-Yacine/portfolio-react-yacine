export default function SkillLevel({ label, level }) {
  return (
    <div className="skill-level">
      <div className="skill-level-heading">
        <span>{label}</span>
        <strong>{level}%</strong>
      </div>
      <div
        className="skill-track"
        role="progressbar"
        aria-label={`Niveau estimé pour ${label}`}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={level}
      >
        <span style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}
