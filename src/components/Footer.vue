  <template>
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-column">
          <h5 class="footer-title">Informations de contact</h5>
          <p>Adresse: 123 Rue de la Vue, Ville, Pays</p>
          <p>Téléphone: +123 456 789</p>
          <p>Email: info@monsite.com</p>
        </div>
        <div class="footer-column">
          <h5 class="footer-title">Liens utiles</h5>
          <ul class="footer-list">
            <li><a href="#" class="footer-link">Accueil</a></li>
            <li><a href="#" class="footer-link">À propos</a></li>
            <li><a href="#" class="footer-link">Services</a></li>
            <li><a href="#" class="footer-link">Contact</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h5 class="footer-title">Réseaux sociaux</h5>
          <ul class="footer-list">
            <li><a href="#" class="footer-link">Facebook</a></li>
            <li><a href="#" class="footer-link">Twitter</a></li>
            <li><a href="#" class="footer-link">LinkedIn</a></li>
            <li><a href="#" class="footer-link">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-text">© {{ new Date().getFullYear() }} MonSite.com. Tous droits réservés.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #343a40;
    color: white;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-around;
    padding: 20px;
  }
  
  .footer-column {
    flex: 1;
    padding: 0 20px;
  }
  
  .footer-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .footer-list {
    list-style: none;
    padding: 0;
  }
  
  .footer-link {
    color: white;
    text-decoration: none;
  }
  
  .footer-link:hover {
    color: #007bff;
  }
  
  .footer-bottom {
    text-align: center;
    color: black !important;
    background-image: linear-gradient(
    to right,
    green,
    white,
    red,
    green,
    white,
    red,
    green,
    white,
    red
  );
    padding: 10px 0;
  }
  .footer-text {
    color: white;
    margin: 0;
  }
  </style>