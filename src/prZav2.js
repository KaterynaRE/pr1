import './prZav2.css'

export default function MusicGroup() {
    return <div className="DivSkill">
        <img src="/imgPr/Skillet_Press_Photo_001.jpg" alt="Skillet" className="imgS"/>
        <h1 className="skilh1"><b>Skillet</b></h1>
        <h2 className="h2SkladG">Поточний склад групи</h2>
        <ul className="ulSkill">
            <li>Джон Купер — ведучий вокаліст, бас, акустична гітара</li>
            <li>Корі Купер — ритм-гітара, клавішні, синтезатори, бек-вокал</li>
            <li>Джен Леджер — барабани, бек-вокал і інколи головний вокал</li>
            <li>Сет Моррісон — соло-гітара (2011 — дотепер); живий бек-вокал</li>
        </ul>
        <h2 className="h2Albomy">Альбоми</h2>
        <ul className="ulSkillAlbom">
            <li>1996 - Skillet</li>
            <li>1998 - Hey You, I Love Your Sou</li>
            <li>2000 - Invincible</li>
            <li>2001 - Alien Youth</li>
        </ul>
    </div>
}