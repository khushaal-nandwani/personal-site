import GithubLink from "./_Github";

const NoteMe = () => {
  return (
    <div class="text-left">
      <div class="flex flex-row justify-between">
        <p className="text-2xl font-bold">NoteMe</p>
        <GithubLink link="https://chromewebstore.google.com/detail/noteme/cmngjelfbeidndnhnfffcokjlfldelcl?pli=1" />
      </div>
      <p className="italic">Javascript, Chrome API</p>
      <li>
        NoteMe is a chrome extension that lets users take notes anywhere on the
        page. The note remains where it was taken on the page.
      </li>
      <li>
        Notes can be browsed and searched in the extension's popup. The webpage
        and its location can be accessed by clicking on these notes.
      </li>
    </div>
  );
};

export default NoteMe;
export const tags = ["Javascript", "Chrome API"];
