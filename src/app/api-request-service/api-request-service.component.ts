import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from './services/post.model';
import { PostService } from './services/post.service';
import { CommonModule } from '@angular/common';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-api-request-service',
  standalone: true,
  imports: [CommonModule],
  providers: [PostService],
  templateUrl: './api-request-service.component.html',
  styleUrl: './api-request-service.component.scss',
})
export class ApiRequestServiceComponent implements OnInit, OnDestroy {
  // Save received posts
  public posts$: Post[] = [];
  // Instead of an array, now one post
  public post$: Observable<Post> | undefined;
  // get the post with ID 1
  public postId: number = 1;

  private destroy$ = new Subject<void>(); // Subject for managing unsubscription

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    // Get all posts
    this.postService
      .getPosts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
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

    // Get a single post by ID
    this.post$ = this.postService
      .getPostById(this.postId)
      .pipe(takeUntil(this.destroy$));
  }

  ngOnDestroy(): void {
    // Unsubscribe from all observables
    this.destroy$.next();
    this.destroy$.complete();
  }
}
