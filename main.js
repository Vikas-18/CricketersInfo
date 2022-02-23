let form = document.getElementById("form");

form.addEventListener("submit", function getname(e) {
  e.preventDefault();
  let playername = document.getElementById("cricketername").value;
  console.log(playername);
  fetch(
    `https://unofficial-cricbuzz.p.rapidapi.com/players/search?plrN=${playername}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "unofficial-cricbuzz.p.rapidapi.com",
        "x-rapidapi-key": "b6de29b671msh656afd628389116p121a33jsn8db112d6b133",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let id = data.player[0].id;
      fetch(
        `https://unofficial-cricbuzz.p.rapidapi.com/players/get-info?playerId=${id}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "unofficial-cricbuzz.p.rapidapi.com",
            "x-rapidapi-key":
              "b6de29b671msh656afd628389116p121a33jsn8db112d6b133",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let playerimg = document.getElementById("playerimg");
          playerimg.src = `${data.image}`;

          let name = document.getElementById("name");
          name.innerHTML = "";
          name.innerHTML = `Full Name: ${data.name}`;

          let dob = document.getElementById("dob");
          dob.innerHTML = "";
          dob.innerHTML = `DOB: ${data.DoB}`;

          let birthplace = document.getElementById("birthplace");
          birthplace.innerHTML = "";
          birthplace.innerHTML = `Birth Place: ${data.birthPlace}`;

          let bat = document.getElementById("bat");
          bat.innerHTML = "";
          bat.innerHTML = `Bat: ${data.bat}`;

          let bowl = document.getElementById("bowl");
          bowl.innerHTML = "";
          bowl.innerHTML = `Bowl: ${data.bowl}`;

          let height = document.getElementById("height");
          height.innerHTML = "";
          height.innerHTML = `Height: ${data.height}`;

          let team = document.getElementById("team");
          team.innerHTML = "";
          team.innerHTML = `Teams: ${data.teams[0]}`;

          let batodirank = document.getElementById("batodirank");
          batodirank.innerHTML = "";
          batodirank.innerHTML = `Rank(Bat): Best(ODI): ${data.currRank.bat.odiBestRank} Current Rank: ${data.currRank.bat.odiRank}`;

          let batt20rank = document.getElementById("batt20rank");
          batt20rank.innerHTML = "";
          batt20rank.innerHTML = `Rank(Bat): Best(T20): ${data.currRank.bat.t20BestRank} Current Rank: ${data.currRank.bat.t20Rank}`;

          let battestrank = document.getElementById("battestrank");
          battestrank.innerHTML = "";
          battestrank.innerHTML = `Rank(Bat): Best(Test): ${data.currRank.bat.testBestRank} Current Rank: ${data.currRank.bat.testRank}`;

          let bowlodirank = document.getElementById("bowlodirank");
          bowlodirank.innerHTML = "";
          bowlodirank.innerHTML = `Rank(Bowl): Best(ODI): ${data.currRank.bowl.odiBestRank} Current Rank: ${data.currRank.bowl.odiRank}`;

          let bowlt20rank = document.getElementById("bowlt20rank");
          bowlt20rank.innerHTML = "";
          bowlt20rank.innerHTML = `Rank(Bowl): Best(T20): ${data.currRank.bowl.t20BestRank} Current Rank: ${data.currRank.bowl.t20Rank}`;

          let bowltestrank = document.getElementById("bowltestrank");
          bowltestrank.innerHTML = "";
          bowltestrank.innerHTML = `Rank(Bowl): Best(Test): ${data.currRank.bowl.testBestRank} Current Rank: ${data.currRank.bowl.testRank}`;

          let bio = document.getElementById("bio");
          bio.innerHTML = "";
          bio.innerHTML = `Bio: ${data.bio}`;
        });
    });
});
