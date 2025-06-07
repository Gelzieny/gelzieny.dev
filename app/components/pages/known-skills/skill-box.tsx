type SkillBoxProps = {
  image: string;
  title: string;
  description: string;
};

export function SkillBox({ image, title, description }: SkillBoxProps) {
  return (
    <article className="bg-gray-800 p-4 sm:p-6 rounded-lg text-center hover:bg-purple-800 transition-all duration-300">
      <figure className="flex justify-center mb-4">
        <img src={image} alt={title} className="w-16 h-16 sm:w-20 sm:h-20" />
      </figure>
      <header>
        <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm sm:text-base">{description}</p>
      </header>
    </article>
  );
}
