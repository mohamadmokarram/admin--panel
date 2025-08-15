export default function Header({ sectionName, para }) {
  return (
    <div className="flex justify-between px-4 pt-4">
      <h1>{sectionName}</h1>
      <h1>{para}</h1>
    </div>
  );
}
