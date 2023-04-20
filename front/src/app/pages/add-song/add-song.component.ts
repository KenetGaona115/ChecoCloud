import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent implements OnInit {
  form = new FormGroup({})
  file !: File

  constructor(private songService: SongService, private snackBar: MatSnackBar, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        name: ['', Validators.required],
        genero: ['', Validators.required],
        autor: ['', Validators.required],
      }
    )
  }

  onSubmit() {


    this.songService.uploadSong(this.form.value).subscribe(
      {
        next: () => {
          this.snackBar.open('Canción cargada exitosamente', 'OK', {
            duration: 3000,
          });
          // Limpiar el formulario después de cargar la canción
        },
        error: (error) => {
          this.snackBar.open('Error al cargar la canción', 'OK', {
            duration: 3000,
          });
          console.error(error);
        }
      }
    );
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }
}
