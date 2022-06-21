

export default function Aboutus() {

  return (
    <>
      <div id="aboutus" className="row"><div className="col-2"><h1>About us</h1></div>
        <div className="col-9">
          <p>"Howdy, y'all! I am from Houston,
            Texas. I got my start as a graphic designer by creating a logo for
            my dad's barbeque joint. As locals began to see my work, I began designing
            materials for everything from western wear to crawdads on a stick. Today,
            I am open to all kinds of design work, although I am always drawn
            to passion projects that let me go back to my Texan roots.</p>
            <a className="btn btn-dark w-40"

        href={require('../About/mm.pdf')}
        // "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        download
      >
       Download Details
      </a>
        </div>
      </div>

    </>
  );
}