/**
 * Consistent page / section title: small label pill, big title with a green
 * highlighted word, and an optional subtitle.
 */
const SectionHeading = ({
  eyebrow,
  title,
  highlight,
  subtitle,
  as: Tag = "h1",
  className = "",
}) => (
  <div className={`text-center ${className}`.trim()}>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <Tag className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 uppercase">
      {title}
      {highlight && (
        <>
          {" "}
          <span className="text-green-400">{highlight}</span>
        </>
      )}
    </Tag>
    {subtitle && (
      <p className="text-gray-400 max-w-2xl mx-auto mt-4 leading-7">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
