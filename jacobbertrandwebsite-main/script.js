// Cibler les éléments nécessaires
const projectCards = document.querySelector('.project-cards');
const scrollRight = document.getElementById('scrollRight');

// Fonction pour déplacer les projets à gauche
scrollRight.addEventListener('click', function() {
    // Décalage horizontal du conteneur de projets
    projectCards.scrollBy({
        left: 350, // Déplace le conteneur de 350px à chaque clic
        behavior: 'smooth' // Ajoute un effet de défilement fluide
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Récupère l'élément de sélection du filtre et les cartes de projet
    const languageFilter = document.getElementById('languageFilter');
    const projectCards = document.querySelectorAll('.project-card');

    // Fonction pour filtrer les projets en fonction du langage sélectionné
    languageFilter.addEventListener('change', function() {
        const selectedLanguage = languageFilter.value;

        // Parcours toutes les cartes de projet
        projectCards.forEach(card => {
            // Récupère les langages de chaque carte depuis l'attribut 'data-languages'
            const languages = card.getAttribute('value').split(' ');

            // Si "all" est sélectionné ou si le projet utilise le langage sélectionné
            if (selectedLanguage === 'all' || languages.includes(selectedLanguage)) {
                card.style.display = 'block';  // Affiche le projet
            } else {
                card.style.display = 'none';   // Masque le projet
            }
        });
    });
});
