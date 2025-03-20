const content = {  
  parcours: `
    <h2>Mon parcours</h2>
    <p>
      J'ai obtenu un <strong>bac général</strong> avec les spécialités 
      <strong>mathématiques</strong> et <strong>Sciences Économiques et Sociales (SES)</strong>. 
      Ces disciplines m'ont permis de développer une solide <strong> capacité d'analyse </strong> et
      de <strong> réflexion logique </strong>.
    </p>
    <p>
      Passionné par les <strong>nouvelles technologies</strong> et souhaitant m'orienter 
      vers un métier d'avenir, j'ai décidé de poursuivre mes études en <strong>BTS SIO</strong> 
      (Services Informatiques aux Organisations). Ce choix s’inscrit dans la continuité de mon 
      projet professionnel, axé sur le <strong>développement informatique.</strong>
    </p>
  `,
  bts: `
    <h2>Pourquoi le BTS SIO ?</h2>
    <p>
  J'ai choisi le <strong>BTS SIO</strong> car, en tant que débutant en <strong>informatique</strong>, 
  je souhaitais être <strong>accompagné</strong> et encadré dans mon apprentissage. 
  Je savais que je voulais m’orienter vers le <strong>développement</strong>, 
  mais je ne me sentais pas prêt à suivre une <strong>licence</strong> trop théorique et autonome, 
  surtout sans avoir eu d’expérience préalable dans ce domaine. 
  Le BTS SIO s'emblait m’offrir un bon équilibre entre <strong>encadrement pédagogique</strong>, 
  <strong>projets pratiques</strong> et <strong>bases solides en développement</strong>.
</p>
  
`,
  bts1: `
       <h2> Compétences acquises durant le BTS</h2>
       <p> J'ai appris a créé et gérer un projet du début à la fin.
       J'ai également acquis des compétences techniques en programmation en travaillant avec 
       plusieurs langage de programmation comme python, Html, CSS, JavaScript et PHP.
       </p>
   `,
  avenir: `
    <h2>Veille technologique</h2>
    <p>
  Après le <strong>BTS SIO</strong>, je souhaite poursuivre mes études en <strong>licence informatique</strong> 
  à l'<strong>Université Paris 8</strong> (Saint-Denis Université). Cette formation me permettra d’approfondir 
  mes connaissances en <strong>programmation</strong> et d’apprendre les langages essentiels pour devenir 
  <strong>développeur de jeux vidéo</strong>, comme le <strong>Python</strong>, le <strong>C</strong>, le 
  <strong>C++</strong> ou encore le <strong>GLSL</strong>.
</p>
<p>
  Dans le cadre de ma <strong>veille technologique</strong>, je m’informe régulièrement sur les 
  <strong>moteurs de jeux</strong> tels que <strong>Unity</strong> et <strong>Unreal Engine</strong>, 
  ainsi que sur les <strong>outils de développement</strong> et les <strong>langages utilisés dans le domaine du jeu vidéo</strong>. 
  Cette veille me permet de rester à jour, de mieux comprendre les exigences du secteur et de me préparer à atteindre 
  mon objectif professionnel.
</p>


  `
};

function showContent(key, event) {
  document.getElementById('content-area').innerHTML = content[key];
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');
}
