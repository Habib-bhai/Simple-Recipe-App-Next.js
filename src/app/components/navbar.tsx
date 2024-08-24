export default function Navbar() {
    return <>
    <div className="nav">
      <div className="logo"></div>
    <h2>BROS RECIPES</h2>
    <ul className="list">
        <a href="/" className="navAnchors"><li>HOME</li></a>
        <a href="/aboutus" className="navAnchors"><li>ABOUT</li></a>
        <a href="/recipe" className="navAnchors"><li>RECIPE</li></a>
    </ul>
    </div>
    </>
}