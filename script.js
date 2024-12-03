document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar");

    // Numerot 1-24 satunnaisessa järjestyksessä
    const numbers = Array.from({ length: 24 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);

    // Haetaan nykyinen päivämäärä
    const today = new Date();
    const currentDay = today.getDate();

    // Luodaan ruudukon luukut
    numbers.forEach(number => {
        const doorLink = document.createElement("a");
        doorLink.classList.add("door");

        // Tarkistetaan, onko luukku avattavissa
        if (number <= currentDay) {
            // Jos luukku on avattavissa, määritetään linkki
            if (number === 1) {
                doorLink.href = `https://search.app.goo.gl/?ius=googleapp&ibi=com.google.GoogleMobile&efr=1&isi=284815942&utm_medium=google_web_promo&utm_source=google_srp_safari&utm_campaign=ar_srp_SearchAr_id&ct=ar_srp_SearchAr_id&pt=9008&mt=8&link=https%3A%2F%2Fgoo.gl%2Fiosgoogleapp%2Fdefault%3Furl%3Dgoogleapp%253A%252F%252Fopen-url%253F%2526url%253Dhttps%25253A%25252F%25252Farvr.google.com%25252Fscene-viewer%25253Ffile%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fcats%25252FBengal%25252FBengal.glb%252526title%25253DBengal%25252Bcat%252526referrer%25253Dgoogle.com%25253AANIMALS_CAT%25253Aios_all_surfaces_intent%252526sound%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fcats%25252FBengal%25252FBengal.mp3%2526min-version%253D134&ifl=https%3A%2F%2Farvr.google.com%2Fscene-viewer%2Fweb%3Ffile%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fcats%2FBengal%2FBengal.glb%26title%3DBengal%2Bcat%26referrer%3Dgoogle.com%3AANIMALS_CAT%3Aios_all_surfaces_intent%26sound%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fcats%2FBengal%2FBengal.mp3%26fdl`;
            } else if (number === 2) {
                doorLink.href = 'https://search.app.goo.gl/?ius=googleapp&ibi=com.google.GoogleMobile&efr=1&isi=284815942&utm_medium=google_web_promo&utm_source=google_srp_safari&utm_campaign=ar_srp_SearchAr_id&ct=ar_srp_SearchAr_id&pt=9008&mt=8&link=https%3A%2F%2Fgoo.gl%2Fiosgoogleapp%2Fdefault%3Furl%3Dgoogleapp%253A%252F%252Fopen-url%253F%2526url%253Dhttps%25253A%25252F%25252Farvr.google.com%25252Fscene-viewer%25253Ffile%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fafrican_endangered%25252FRedPanda%25252FRedPanda.glb%252526title%25253DRed%25252Bpanda%252526referrer%25253Dgoogle.com%25253AANIMALS_AFRICAN_ENDANGERED%25253Aios_all_surfaces_intent%252526sound%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fafrican_endangered%25252FRedPanda%25252FRedPanda.mp3%2526min-version%253D134&ifl=https%3A%2F%2Farvr.google.com%2Fscene-viewer%2Fweb%3Ffile%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fafrican_endangered%2FRedPanda%2FRedPanda.glb%26title%3DRed%2Bpanda%26referrer%3Dgoogle.com%3AANIMALS_AFRICAN_ENDANGERED%3Aios_all_surfaces_intent%26sound%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fafrican_endangered%2FRedPanda%2FRedPanda.mp3%26fdl';
            } else if (number === 3) {
                doorLink.href = 'https://arvr.google.com/scene-viewer/web?file=https://storage.googleapis.com/ar-answers-in-search-models/static/AnglerFish/model.glb&title=Krottikala&referrer=google.com:ANIMALS:ios_all_surfaces_intent&sound=https://storage.googleapis.com/ar-answers-in-search-models/static/AnglerFish/Anglerfish.mp3&fdl';
            } else if (number === 4) {
                doorLink.href = 'https://search.app.goo.gl/?ius=googleapp&ibi=com.google.GoogleMobile&efr=1&isi=284815942&utm_medium=google_web_promo&utm_source=google_srp_safari&utm_campaign=ar_srp_SearchAr_id&ct=ar_srp_SearchAr_id&pt=9008&mt=8&link=https%3A%2F%2Fgoo.gl%2Fiosgoogleapp%2Fdefault%3Furl%3Dgoogleapp%253A%252F%252Fopen-url%253F%2526url%253Dhttps%25253A%25252F%25252Farvr.google.com%25252Fscene-viewer%25253Ffile%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252FBrownBear%25252Fmodel.glb%252526title%25253DKarhu%252526referrer%25253Dgoogle.com%25253AANIMALS%25253Aios_all_surfaces_intent%252526sound%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252FBrownBear%25252FBear_Brown_Unisex_Adult.mp3%2526min-version%253D134&ifl=https%3A%2F%2Farvr.google.com%2Fscene-viewer%2Fweb%3Ffile%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2FBrownBear%2Fmodel.glb%26title%3DKarhu%26referrer%3Dgoogle.com%3AANIMALS%3Aios_all_surfaces_intent%26sound%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2FBrownBear%2FBear_Brown_Unisex_Adult.mp3%26fdl';
            } else if (number === 5) { // jatka
                doorLink.href = 'https://search.app.goo.gl/?ius=googleapp&ibi=com.google.GoogleMobile&efr=1&isi=284815942&utm_medium=google_web_promo&utm_source=google_srp_safari&utm_campaign=ar_srp_SearchAr_id&ct=ar_srp_SearchAr_id&pt=9008&mt=8&link=https%3A%2F%2Fgoo.gl%2Fiosgoogleapp%2Fdefault%3Furl%3Dgoogleapp%253A%252F%252Fopen-url%253F%2526url%253Dhttps%25253A%25252F%25252Farvr.google.com%25252Fscene-viewer%25253Ffile%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FStegosaurus.glb%252526title%25253DStegosaurus%252526referrer%25253Dgoogle.com%25253ADINOSAURS%25253Aios_all_surfaces_intent%252526sound%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FStegosaurus.mp3%252526link%25253Dhttps%25253A%25252F%25252Fwww.jurassicworld.com%25252Fintel%25252Fdinosaur%25252Fstegosaurus%252526disable_occlusion%25253Dtrue%252526initial_scale%25253Dauto%2526min-version%253D134&ifl=https%3A%2F%2Farvr.google.com%2Fscene-viewer%2Fweb%3Ffile%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FStegosaurus.glb%26title%3DStegosaurus%26referrer%3Dgoogle.com%3ADINOSAURS%3Aios_all_surfaces_intent%26sound%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FStegosaurus.mp3%26link%3Dhttps%3A%2F%2Fwww.jurassicworld.com%2Fintel%2Fdinosaur%2Fstegosaurus%26disable_occlusion%3Dtrue%26initial_scale%3Dauto%26fdl';
            } else if (number === 6) {
                doorLink.href = 'https://search.app.goo.gl/?ius=googleapp&ibi=com.google.GoogleMobile&efr=1&isi=284815942&utm_medium=google_web_promo&utm_source=google_srp_safari&utm_campaign=ar_srp_SearchAr_id&ct=ar_srp_SearchAr_id&pt=9008&mt=8&link=https%3A%2F%2Fgoo.gl%2Fiosgoogleapp%2Fdefault%3Furl%3Dgoogleapp%253A%252F%252Fopen-url%253F%2526url%253Dhttps%25253A%25252F%25252Farvr.google.com%25252Fscene-viewer%25253Ffile%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FBrachiosaur.glb%252526title%25253DBrachiosaurus%252526referrer%25253Dgoogle.com%25253ADINOSAURS%25253Aios_all_surfaces_intent%252526sound%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FBrachiosaurus.mp3%252526link%25253Dhttps%25253A%25252F%25252Fwww.jurassicworld.com%25252Fintel%25252Fdinosaur%25252FBrachiosaurus%252526disable_occlusion%25253Dtrue%252526initial_scale%25253Dauto%2526min-version%253D134&ifl=https%3A%2F%2Farvr.google.com%2Fscene-viewer%2Fweb%3Ffile%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FBrachiosaur.glb%26title%3DBrachiosaurus%26referrer%3Dgoogle.com%3ADINOSAURS%3Aios_all_surfaces_intent%26sound%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FBrachiosaurus.mp3%26link%3Dhttps%3A%2F%2Fwww.jurassicworld.com%2Fintel%2Fdinosaur%2FBrachiosaurus%26disable_occlusion%3Dtrue%26initial_scale%3Dauto%26fdl';
            } else if (number === 7) {
                doorLink.href = 'https://search.app.goo.gl/?ius=googleapp&ibi=com.google.GoogleMobile&efr=1&isi=284815942&utm_medium=google_web_promo&utm_source=google_srp_safari&utm_campaign=ar_srp_SearchAr_id&ct=ar_srp_SearchAr_id&pt=9008&mt=8&link=https%3A%2F%2Fgoo.gl%2Fiosgoogleapp%2Fdefault%3Furl%3Dgoogleapp%253A%252F%252Fopen-url%253F%2526url%253Dhttps%25253A%25252F%25252Farvr.google.com%25252Fscene-viewer%25253Ffile%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FSpinosaurus.glb%252526title%25253DSpinosaurus%252526referrer%25253Dgoogle.com%25253ADINOSAURS%25253Aios_all_surfaces_intent%252526sound%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FSpinosaurus.mp3%252526link%25253Dhttps%25253A%25252F%25252Fwww.jurassicworld.com%25252Fintel%25252Fdinosaur%25252Fspinosaurus%252526disable_occlusion%25253Dtrue%252526initial_scale%25253Dauto%2526min-version%253D134&ifl=https%3A%2F%2Farvr.google.com%2Fscene-viewer%2Fweb%3Ffile%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FSpinosaurus.glb%26title%3DSpinosaurus%26referrer%3Dgoogle.com%3ADINOSAURS%3Aios_all_surfaces_intent%26sound%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FSpinosaurus.mp3%26link%3Dhttps%3A%2F%2Fwww.jurassicworld.com%2Fintel%2Fdinosaur%2Fspinosaurus%26disable_occlusion%3Dtrue%26initial_scale%3Dauto%26fdl';
            }
            else {
                // Geneerinen linkki muille luukuille
                doorLink.href = `models/t-rex-${number}.usdz`;
            }
            doorLink.target = "_blank"; // Avataan uuteen välilehteen
        } else {
            // Jos luukku ei ole vielä avattavissa, estetään toiminto
            doorLink.href = "#";
            doorLink.classList.add("locked");
            doorLink.addEventListener("click", (e) => {
                e.preventDefault();
                alert(`Luukku ${number} ei ole vielä avattavissa!`);
            });
        }

        doorLink.textContent = number;
        calendar.appendChild(doorLink);
    });
});
