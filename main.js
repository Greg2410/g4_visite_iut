// function clickInfo() {
//     viewer.remove(img.nom , int_i4);
//     viewer.add(couloir_prof_i4);
//     viewer.setPanorama(couloir_prof_i4);
//     //Gestion de l'angle de la camera
//     viewer.getControl().rotateLeft(4.7);
//     infospot.addHoverText('');
//   }

const tableauImages = [
  {
    'nom': 'g4_int_i4',
     'rotation': 4.7,
      'infospot': [
        {           
          'position' : new THREE.Vector3(
            rayon * Math.cos( Math.PI / 7) * Math.sin(Math.PI / 1.7), // Attention Y sphère
            rayon * Math.sin( Math.PI), // Attention Z de la sphère
            rayon * Math.cos( Math.PI) * Math.cos((Math.PI / 1.7) / 1.2) // Attention X de la sphèrec
          ),
          'text': 'sortie i4 couloir élève',
            'rotation' :viewer.getControl().rotateLeft(1.5)
        },
        { 
          'phi' : -0.7,
          'theta': Math.PI,    
          'position' : new THREE.Vector3(
            rayon * Math.cos(Math.PI) * Math.sin(Math.PI / 1.7), // Attention Y sphère
            rayon * Math.sin(Math.PI), // Attention Z de la sphère
            rayon * Math.cos(Math.PI) * Math.cos(Math.PI / 1.7) // Attention X de la sphère
          ),
          'text': 'sortie i4 couloir prof',
            'rotation' :viewer.getControl().rotateLeft(4.7)
        } 
      ]
    }
  ];