let coworkerList = [
    {
        title: "Adam Packard",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U01FX25C77G-cb9f4c60a2e7-512",
        category: "Slack",
        selected: false
    },
    {
        title: "Alex Rice",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U03LUQHAAH5-7811c31d8951-512",
        category: "Slack",
        selected: false
    },
    {
        title: "Alyssa Sorensen",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U0179884Y4F-8841749f17d7-512",
        category: "Slack",
        selected: false
    },
    {
        title: "Andres Rincon",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U02EVA7HYUV-cc566b09a7d9-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "AnnaMarie Dallimore",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U030HJP2UG2-9bd95d0e3689-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Avi Delman",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U02RE008H1Q-16ef66af90db-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Brandon Severn",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-UUEB4ME2U-4734e5df3f19-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Brent Showerman",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U039K6WTGUS-cfc079c84675-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Brian Allred",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U04678ERJPJ-656150eb3c21-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Brian Silverio",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U026XGXS3F1-745a3e1de98b-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Carolyn Passey",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-UT6MYJPHR-9e6039004c5e-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Conner Andrews",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U039XR0UU2V-66288d9f397e-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Dave Watkins",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U02LP0VRPCM-1fae55581431-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Elton Cheng",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U02P0A8L9J8-0042ef268854-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Erin Wasson",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U01RUCLHTLH-6551be7224a0-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Ferrol Hunting",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U0273UBGQ1K-993943490ba0-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Jacob Carleton",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U0405GB5UQH-5376d3f9ba60-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Justin Dyer",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U02JDPKFDFE-e6f735082a1b-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Kevin Andrews",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U01E51MB8DC-1fc344f5de88-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Malocolm Bailey",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U01MEKTHZ44-27fdd53b35b8-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Mike Portela",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U02PHB0B1QQ-1d08df98ff8d-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Patrick Corrigan",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U02J7BB4T08-44fdb27dd615-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Randy Phommahaxay",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U03PECJN89F-bc88e3b31a86-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Sam Troychak",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U047P01RVA8-ca72297a86f2-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Sherill Samuel",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U047HJ0T021-a3baffb2f594-512",
        category: "Slack",
        selected: false
    },    
    {
        title: "Trevor Pearce",
        slack: "https://ca.slack-edge.com/T7FV8S2ER-U02EYAK6VKL-9c5d8cddb745-512",
        category: "Slack",
        selected: false
    },
];
let coworkerListLength = coworkerList.length;
let randomButton = document.querySelector('#random-button');
let outputContainer = document.querySelector('#results');
let animationSpinner = `<div class="sk-cube-grid">
  <div class="sk-cube sk-cube1"></div>
  <div class="sk-cube sk-cube2"></div>
  <div class="sk-cube sk-cube3"></div>
  <div class="sk-cube sk-cube4"></div>
  <div class="sk-cube sk-cube5"></div>
  <div class="sk-cube sk-cube6"></div>
  <div class="sk-cube sk-cube7"></div>
  <div class="sk-cube sk-cube8"></div>
  <div class="sk-cube sk-cube9"></div>
</div>`;

function randomizerEvents() {
  loadingSpinner();
  getRandomInt();
}

function loadingSpinner() {
  outputContainer.innerHTML = animationSpinner;
}

function getRandomInt(max){
  max = coworkerListLength;
  let randomIndex = Math.floor(Math.random() * Math.floor(max));
  let coworkerTitle = coworkerList[randomIndex].title;
  let coworkerSlack = coworkerList[randomIndex].slack;
  let coworkerGenre = coworkerList[randomIndex].category;
  let coworkerSelectedClass;
  
  if(coworkerList[randomIndex].selected === false) {
    coworkerSelectedClass = "not-selected";
  } else {
    coworkerSelectedClass = "selected";
  }
  
  function outputCoworker(){
    if(coworkerList[randomIndex].selected === false) {
      outputContainer.className = "results results--loaded";
      outputContainer.innerHTML = `
        <div class="results__inner-wrapper">
          <h2 class="results__heading">${coworkerTitle}</h2>
          <img height="500" class="results__image results__image--${coworkerSelectedClass}" src='${coworkerSlack}' alt='${coworkerTitle}' />
        </div>
      `;
    } else {
      outputContainer.innerHTML = `This title was already selected: ${coworkerTitle}. Generate coworker again.`;
    }
  }
  
  setTimeout(outputCoworker, 500);
}

randomButton.addEventListener('click', randomizerEvents);