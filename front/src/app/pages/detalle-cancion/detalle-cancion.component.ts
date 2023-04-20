import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-cancion',
  templateUrl: './detalle-cancion.component.html',
  styleUrls: ['./detalle-cancion.component.scss']
})
export class DetalleCancionComponent implements OnInit {

  songId!: string;
  song: any = {};
  comments: any[] = [];
  userRating =0
  stars = [1, 2, 3, 4, 5];

  newComment: any = {
    text: '',
    user: '',
    date: new Date()
  };

  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.songId != this.route.snapshot.paramMap.get('id');
    this.getSongDetails();
    this.getComments();
  }

  getSongDetails() {
    // Get song details from backend using this.songId
    this.song = {
      title: 'Example Song title',
      artist: 'Example Artist',
      album: 'Example Album',
      lyrics: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae felis quis ex posuere tristique non non nibh. Aenean mollis est vel ipsum euismod, vel commodo magna sagittis. Nulla facilisi. Nulla euismod leo nisl, quis efficitur magna commodo sit amet. Sed rhoncus, quam ac posuere finibus, sem leo blandit turpis, vitae volutpat eros nisi eu est. Nulla vel enim a nulla lobortis varius id eu orci. Nunc at dolor lobortis, tincidunt orci vel, sodales turpis. Sed bibendum, purus id pulvinar scelerisque, libero magna ultrices mi, sit amet bibendum ex libero vel metus. Quisque id ante id ante efficitur lobortis. Ut et leo eget lorem sodales vulputate. Donec interdum elit non tellus pretium elementum. Nullam feugiat velit ac eros vehicula auctor. Nam porttitor turpis ut lorem ultricies congue. Donec ac pretium mauris, sed finibus nibh. Fusce et magna vitae diam suscipit interdum. Suspendisse potenti.',
      imageUrl: '',
      audioUrl: 'https://example.com/example.mp3',
      rating: 3.5, // The rating can be retrieved from the backend as well
    };
  }

  getComments() {
    // Get comments from backend using this.songId
    this.comments = [
      {
        text: 'This is a great song!',
        user: 'John Doe',
        date: new Date(2022, 8, 10) // Fecha fija para el primer comentario
      },
      {
        text: 'I love this song!',
        user: 'Jane Smith',
        date: new Date(2022, 8, 12) // Fecha fija para el segundo comentario
      },
      {
        text: 'This song is okay.',
        user: 'Bob Johnson',
        date: new Date(2022, 8, 15) // Fecha fija para el tercer comentario
      }
    ];
  }

  rateSong(value: number) {
    //subir la calificacion
    this.userRating = value
    // Send the rating to the backend and display a message
    this.snackBar.open('Thanks for rating this song!', 'Close', {
      duration: 2000
    });
  }

  addComment() {
    if (this.newComment.text && this.newComment.user) {
      this.comments.push(this.newComment);
      this.newComment = {
        text: '',
        user: '',
        date: new Date()
      };
      this.snackBar.open('Comment added successfully!', 'Close', {
        duration: 2000
      });
    } else {
      this.snackBar.open('Please fill in all fields!', 'Close', {
        duration: 2000
      });
    }
  }
}


