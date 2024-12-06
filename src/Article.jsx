export default function Article() {
    return(
        <>
         <time dateTime= "date" style={{ fontSize: "1em" }}>11/12/20</time>
        <h2 style={{ fontSize: "2em"}}>On the Street in Brooklyn</h2>
        <img src="/img/blog-image-1.jpg" alt="Brooklyn street image"/>
         <p style= {{ textAlign: "left" }} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href="#" className="continue">Continues ...</a>
        <hr/>
        <time dateTime= "date" style={{ fontSize: "1em" }}>11/11/20</time>
        <h2 style={{ fontSize: "2em"}}>Vintage in Vogue</h2>
        <img src="/img/blog-image-2.jpg" alt="people image"></img>
        <p style= {{ textAlign: "left" }} >
        Natoque mi eget sit leo mollis ut dapibus magna cursus. Class volutpat hendrerit potenti commodo posuere elementum maximus lacinia facilisis. Fames inceptos fringilla platea, nec hac himenaeos. Nibh proin aenean donec sem, nascetur pulvinar amet. Vestibulum proin blandit aenean parturient ullamcorper. Montes dis scelerisque vivamus vivamus posuere nam.
        </p>
        <a href="#" className="continue">Continues ...</a>
        </>
    );
}