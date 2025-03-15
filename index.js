document.addEventListener("DOMContentLoaded", async function() {
  const adDivs = document.querySelectorAll(".redAd");
  try {
    const response = await fetch("https://cdn.jsdelivr.net/gh/redispurple/REDclick@78987061f16d31e2c3eb5a42dcd32aaf6c6a8444/list.json"); // Update to the newest list.json permalink
    const ads = await response.json();
    
    
    function getRandomAd(adList) {
      const totalWeight = adList.reduce((sum, ad) => sum + ad.importance, 0);
      let randomNumber = Math.random() * totalWeight;
      for (let ad of adList) {
        if (randomNumber < ad.importance) return ad;
        randomNumber -= ad.importance;
      }
      return adList[adList.length - 1];
    }

    
    adDivs.forEach(div => {
      const ad = getRandomAd(ads);
      div.innerHTML = `
        <a href="${ad.url}" target="_blank" id="adPopup">
          <img src="${ad.picture}" alt="${ad.name}" style="max-width:300px; max-height:250px;" />
        </a>
      `;
    });
  } catch (error) {
    console.error("Error fetching ads:", error);
  }
});
