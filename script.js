const digimones = [
    {
      name: "Koromon",
      img: "https://digimon.shadowsmith.com/img/koromon.jpg",
      level: "In Training"
    },
    {
      name: "Tsunomon",
      img: "https://digimon.shadowsmith.com/img/tsunomon.jpg",
      level: "In Training"
    },
    {
      name: "Yokomon",
      img: "https://digimon.shadowsmith.com/img/yokomon.jpg",
      level: "In Training"
    },
    {
      name: "Motimon",
      img: "https://digimon.shadowsmith.com/img/motimon.jpg",
      level: "In Training"
    },
    {
      name: "Patamon",
      img: "https://digimon.shadowsmith.com/img/patamon.jpg",
      level: "Rookie"
    },
    {
      name: "Kuwagamon",
      img: "https://digimon.shadowsmith.com/img/kuwagamon.jpg",
      level: "Champion"
    },
    {
      name: "Greymon",
      img: "https://digimon.shadowsmith.com/img/greymon.jpg",
      level: "Champion"
    },
    {
      name: "Tanemon",
      img: "https://digimon.shadowsmith.com/img/tanemon.jpg",
      level: "In Training"
    }
  ];
  function contarDigimonesPorNivel(digimones) {
    
    let inTrainingCount = 0;
    let championCount = 0;
    let rookieCount = 0;
  
   
    digimones.forEach((digimon) => {
      if (digimon.level === "In Training") {
        inTrainingCount++;
      } else if (digimon.level === "Champion") {
        championCount++;
      } else if (digimon.level === "Rookie") {
        rookieCount++;
      }
    });
  
    
    const content = `
      <div class="container">
        <p>Existen ${inTrainingCount} digimones con nivel In Training</p>
        <p>Existen ${championCount} digimones con nivel Champion</p>
        <p>Existen ${rookieCount} digimones con nivel Rookie</p>
      </div>
    `;
  
    console.log(content)
    document.getElementById("container").innerHTML = content;
  }
  
  
  contarDigimonesPorNivel(digimones);
  