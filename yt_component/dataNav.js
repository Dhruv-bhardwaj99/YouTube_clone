function navbar(){
    return `<div id="navbar">
    <div id="logo">

        <a href="mywork.html">
            <img src="https://www.logo.wine/a/logo/YouTube/YouTube-Icon-Full-Color-Logo.wine.svg" alt="youtube"/>
        </a>
    </div>
    <h1> <a href="mywork.html">YouTube</a></h1>

    <div id="search">
        <input type="text" id="searchbar" placeholder="Search here"/>
        <button onclick="searchVideo()">Search</button>
    </div>

    <div id="authe">
        <h3><a href="sign-in.html">Sign-In</a></h3>
        <a href="login.html" id="dp">
            <img src="https://www.kindpng.com/picc/m/451-4517876_default-profile-hd-png-download.png" alt="default_dp">
        </a>
    </div>
</div>
<div id="main">
    <div id="leftBox">
        <button><ion-icon name="menu"></ion-icon></button>
        <button><ion-icon name="home">home</ion-icon><br>
          <label for="">Home</label>  
        </button>
        <button><ion-icon name="compass"></ion-icon><br>
            <label for="">Explore</label>
        </button>
        <button><ion-icon name="logo-youtube"></ion-icon><br>
            <label for="" id="sub">Subscription</label>
        </button>
        <button><ion-icon name="briefcase"></ion-icon><br>
            <label for="">Library</label>
        </button>
    </div>
    <div id="result"></div>
</div>`
}
export default navbar;