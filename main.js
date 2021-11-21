// function clickInfo() {
//     viewer.remove(img.nom , int_i4);
//     viewer.add(couloir_prof_i4);
//     viewer.setPanorama(couloir_prof_i4);
//     //Gestion de l'angle de la camera
//     viewer.getControl().rotateLeft(4.7);
//     infospot.addHoverText('');
//   }

const rayon = new PANOLENS.ImagePanorama('img/g4_int_i4.jpg').radius;

const tableauImages = [
  {
    'pano':  new PANOLENS.ImagePanorama('img/g4_int_i4.jpg'),
    'nom': 'g4_int_i4',
      'infospot': [
        {
          'phi' : Math.PI / 2,
          'theta': 0,     
          'position' : new THREE.Vector3(
            rayon * Math.cos(0) * Math.sin(Math.PI / 2), // Attention Y sphère
            rayon * Math.sin(0), // Attention Z de la sphère
            rayon * Math.cos(0) * Math.cos(Math.PI / 2) // Attention X de la sphère
          ),
          'text': 'sortie i4 couloir élève',
          'destination': 'g4_couloir_i4'
        },
        { 
          'phi' : -0.7,
          'theta': Math.PI,    
          'position' : new THREE.Vector3(
            rayon * Math.cos(Math.PI) * Math.sin(Math.PI / 2 + Math.PI/8), // Attention Y sphère
            rayon * Math.sin(Math.PI), // Attention Z de la sphère
            rayon * Math.cos(Math.PI) * Math.cos(Math.PI / 2 + Math.PI/8) // Attention X de la sphère
          ),
          'text': 'sortie i4 couloir prof',
          'destination': 'g4_couloir_prof_i4'
        } 
      ]
  },
  {
    'pano': new PANOLENS.ImagePanorama('img/g4_int_i6.jpg'),
    'nom': 'g4_int_i6',
      'infospot': [
        {
          'phi' : Math.PI / 2,
          'theta': Math.PI,     
          'position' : new THREE.Vector3(
            rayon * Math.cos(Math.PI) * Math.sin(Math.PI / 2), // Attention Y sphère
            rayon * Math.sin(Math.PI), // Attention Z de la sphère
            rayon * Math.cos(Math.PI) * Math.cos(Math.PI / 2) // Attention X de la sphère
          ),
          'text': 'sortie i6 couloir élève',
          'destination': 'g4_couloir_i6'
        },
        { 
          'phi' : -0.7,
          'theta': Math.PI,    
          'position' : new THREE.Vector3(
            rayon * Math.cos(-14*Math.PI/15) * Math.sin(Math.PI / 2 + Math.PI), // Attention Y sphère
            rayon * Math.sin(-14*Math.PI/15), // Attention Z de la sphère
            rayon * Math.cos(-14*Math.PI/15) * Math.cos(Math.PI / 2 + Math.PI) // Attention X de la sphère
          ),
          'text': 'sortie i6 couloir prof',
          'destination': 'g4_couloir_prof_i6'
        } 
      ]
  },
  {
    'pano': new PANOLENS.ImagePanorama('img/g4_couloir_i4.jpg'),
    'nom': 'g4_couloir_i4',
      'infospot': [
        {
          'phi' : Math.PI / 2,
          'theta': Math.PI,     
          'position' : new THREE.Vector3(
            rayon * Math.cos(Math.PI) * Math.sin(Math.PI / 2 + Math.PI/2), // Attention Y sphère
            rayon * Math.sin(Math.PI), // Attention Z de la sphère
            rayon * Math.cos(Math.PI) * Math.cos(Math.PI / 2 + Math.PI/2) // Attention X de la sphère
          ),
          'text': 'salle i4 depuis couloir élève',
          'destination': 'g4_int_i4'
        },
        { 
          'phi' : Math.PI / 2,
          'theta': 0,   
          'position' : new THREE.Vector3(
            rayon * Math.cos(Math.PI) * Math.sin(Math.PI / 2), // Attention Y sphère
            rayon * Math.sin(Math.PI), // Attention Z de la sphère
            rayon * Math.cos(Math.PI) * Math.cos(Math.PI / 2) // Attention X de la sphère
          ),
          'text': 'couloir i6 depuis couloir i4',
          'destination': 'g4_couloir_i6'
        },
        { 
          'phi' : Math.PI,
          'theta': Math.PI,   
          'position' : new THREE.Vector3(
            rayon * Math.cos(-14*Math.PI/15) * Math.sin(-Math.PI/6), // Attention Y sphère
            rayon * Math.sin(-14*Math.PI/15), // Attention Z de la sphère
            rayon * Math.cos(-14*Math.PI/15) * Math.cos(-Math.PI/6) // Attention X de la sphère
          ),
          'text': 'extérieur i4 depuis couloir i4',
          'destination': 'g4_couloir_i4'
        } 
      ]
  },
  {
    'pano':new PANOLENS.ImagePanorama('img/g4_couloir_i6.jpg'),
    'nom': 'g4_couloir_i6',
      'infospot': [
        {
          'phi' : Math.PI / 2,
          'theta': Math.PI,     
          'position' : new THREE.Vector3(
            rayon * Math.cos(Math.PI) * Math.sin(Math.PI / 2*2), // Attention Y sphère
            rayon * Math.sin(Math.PI), // Attention Z de la sphère
            rayon * Math.cos(Math.PI) * Math.cos(Math.PI / 2*2) // Attention X de la sphère
          ),
          'text': 'salle i6 depuis couloir élève',
          'destination': 'g4_int_i6'
        },
        { 
          'phi' : 0,
          'theta': Math.PI,    
          'position' : new THREE.Vector3(
            rayon * Math.cos(-15*Math.PI/16) * Math.sin(Math.PI / 2-Math.PI), // Attention Y sphère
            rayon * Math.sin(-15*Math.PI/16), // Attention Z de la sphère
            rayon * Math.cos(-15*Math.PI/16) * Math.cos(Math.PI / 2-Math.PI) // Attention X de la sphère
          ),
          'text': 'couloir élève i4 depuis couloir élève i6',
          'destination': 'g4_couloir_i4'
        },
        { 
          'phi' : 0,
          'theta': Math.PI,    
          'position' : new THREE.Vector3(
            rayon * Math.cos(-19*Math.PI/20) * Math.sin(Math.PI / 2), // Attention Y sphère
            rayon * Math.sin(-19*Math.PI/20), // Attention Z de la sphère
            rayon * Math.cos(-19*Math.PI/20) * Math.cos(Math.PI / 2) // Attention X de la sphère
          ),
          'text': 'couloir élève dbe depuis couloir élève i6',
          'destination': 'g4_couloir_i6'
        },
        { 
          'phi' : 0,
          'theta': Math.PI,    
          'position' : new THREE.Vector3(
            rayon * Math.cos(-15*Math.PI/16) * Math.sin(-Math.PI/4), // Attention Y sphère
            rayon * Math.sin(-15*Math.PI/16), // Attention Z de la sphère
            rayon * Math.cos(-15*Math.PI/16) * Math.cos(-Math.PI/4), // Attention X de la sphère
          ),
          'text': 'ext i4 depuis couloir élève i6',
          'destination': 'g4_couloir_i6'
        }
      ]
  },
  {
    'pano': new PANOLENS.ImagePanorama('img/g4_couloir_prof_i4.jpg'),
    'nom': 'g4_couloir_prof_i4',
     'rotation': 4.7,
      'infospot': [
        {
          'phi' : Math.PI / 2,
          'theta': Math.PI,     
          'position' : new THREE.Vector3(
            rayon * Math.cos(Math.PI) * Math.sin(Math.PI / 2-Math.PI), // Attention Y sphère
            rayon * Math.sin(Math.PI), // Attention Z de la sphère
            rayon * Math.cos(Math.PI) * Math.cos(Math.PI / 2-Math.PI) // Attention X de la sphère
          ),
          'text': 'entrée i6 depuis couloir prof i4',
          'destination': 'g4_couloir_prof_i6'
        },
        { 
          'phi' : Math.PI / 2,
          'theta': 0,   
          'position' : new THREE.Vector3(
            rayon * Math.cos(Math.PI) * Math.sin(-Math.PI), // Attention Y sphère
            rayon * Math.sin(Math.PI), // Attention Z de la sphère
            rayon * Math.cos(Math.PI) * Math.cos(-Math.PI) // Attention X de la sphère
          ),
          'text': 'salle i4 depuis couloir prof i4',
          'destination': 'g4_int_i4'
        },
        { 
          'phi' : Math.PI,
          'theta': 0,   
          'position' : new THREE.Vector3(
            rayon * Math.cos(Math.PI) * Math.sin(Math.PI / 2), // Attention Y sphère
            rayon * Math.sin(Math.PI), // Attention Z de la sphère
            rayon * Math.cos(Math.PI) * Math.cos(Math.PI / 2) // Attention X de la sphère
          ),
          'text': 'accueil depuis couloir prof i4',
          'destination': 'g1_couloir_prof_accueil'
        } 
      ]
  },
  {
    'pano': new PANOLENS.ImagePanorama('img/g4_couloir_prof_i6.jpg'),
    'nom': 'g4_couloir_prof_i6',
     'rotation': 4,
      'infospot': [
        {
          'phi' : Math.PI / 2,
          'theta': Math.PI,     
          'position' : new THREE.Vector3(
            rayon * Math.cos(Math.PI) * Math.sin(Math.PI), // Attention Y sphère
            rayon * Math.sin(Math.PI), // Attention Z de la sphère
            rayon * Math.cos(Math.PI) * Math.cos(Math.PI) // Attention X de la sphère
          ),
          'text': 'salle i6 depuis couloir prof i6',
          'destination': 'g4_int_i6'
        },
        { 
          'phi' : Math.PI / 2,
          'theta': 0,   
          'position' : new THREE.Vector3(
            rayon * Math.cos(-19*Math.PI/20) * Math.sin(10*Math.PI/19), // Attention Y sphère
            rayon * Math.sin(-19*Math.PI/20), // Attention Z de la sphère
            rayon * Math.cos(-19*Math.PI/20) * Math.cos(10*Math.PI/19) // Attention X de la sphère
          ),
          'text': 'couloir prof i4 depuis couloir prof i6',
          'destination': 'g4_couloir_prof_i4'
        },
        { 
          'phi' : Math.PI,
          'theta': Math.PI,   
          'position' : new THREE.Vector3(
            rayon * Math.cos(Math.PI) * Math.sin(3*Math.PI/2), // Attention Y sphère
            rayon * Math.sin(Math.PI), // Attention Z de la sphère
            rayon * Math.cos(Math.PI) * Math.cos(3*Math.PI/2) // Attention X de la sphère
          ),
          'text': 'couloir prof escalier depuis couloir prof i6',
          'destination': 'g4_couloir_prof_i6'
        } 
      ]
  },
];