import { Component, OnInit } from '@angular/core';
import { Post } from './services/post.model';
import { PostService } from './services/post.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-api-request-service',
  standalone: true,
  imports: [CommonModule],
  providers: [PostService],
  templateUrl: './api-request-service.component.html',
  styleUrl: './api-request-service.component.scss',
})
export class ApiRequestServiceComponent implements OnInit {
  // Save received posts
  public posts$: Post[] = [];
  // Instead of an array, now one post
  public post$: Observable<Post> | undefined;
  // get the post with ID 1
  public postId: number = 1;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (data) => {
        console.log('Received posts:', data);
        this.posts$ = data;
      },
      error: (err) => {
        console.error('Error occurred:', err);
      },
      complete: () => {
        console.log('Request completed');
      },
    });

    // Assigning an Observable for a single post
    this.post$ = this.postService.getPostById(this.postId);
  }
}
