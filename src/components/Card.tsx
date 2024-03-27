export default function Card({ language }) {
  return (
    <div className="card">
      <h2>{language.name}</h2>
      <p>Year of Start: {language.yearofstart}</p>
      <p>Creator: {language.creator}</p>
      <p>Use Case: {language.usecase}</p>
    </div>
  );
}
