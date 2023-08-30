import React, { Component } from 'react';
import './genre.css';

class genre extends Component {
    render() {
    return(

<body>
    <header>
        <div class="logo">
            <img src="img/gamelogo.png"></img>
            <p>RecoGame</p>
        </div>
        <nav>
            <ul>
                <li class="one"><a href="#">홈</a></li>
                <li class="two"><a href="#">장르</a></li>
                <li class="thr"><a href="#">인기게임</a></li>
                <li class="fou"><a href="#">마이페이지</a></li>
            </ul>
        </nav>
    </header>
    <hr></hr>

    <section>
        <div class="photo-table">
            <div class="photo-cell">
                <img src="photo1.jpg" alt="사진 1"></img>
            </div>
            <div class="photo-cell">
                <img src="photo2.jpg" alt="사진 2"></img>
            </div>
            <div class="photo-cell">
                <img src="photo3.jpg" alt="사진 3"></img>
            </div>
            <div class="photo-cell">
                <img src="photo4.jpg" alt="사진 4"></img>
            </div>
        </div>
        <div class="photo-table">
            <div class="photo-cell">
                <img src="photo1.jpg" alt="사진 1"></img>
            </div>
            <div class="photo-cell">
                <img src="photo2.jpg" alt="사진 2"></img>
            </div>
            <div class="photo-cell">
                <img src="photo3.jpg" alt="사진 3"></img>
            </div>
            <div class="photo-cell">
                <img src="photo4.jpg" alt="사진 4"></img>
            </div>
        </div>
    </section>
</body>
    )
    }
}

export default genre;