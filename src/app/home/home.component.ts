import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnDestroy, OnInit, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  host: {
    'ngSkipHydration': 'true'
  }
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('typewriterElement', { static: false }) typewriterElement!: ElementRef;
  
  private typewriter: any;
  public showFallback = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    // Component initialization
    // Show fallback text initially only in browser
    if (isPlatformBrowser(this.platformId)) {
      this.showFallback = true;
    }
  }

  ngAfterViewInit() {
    // Initialize typewriter after view is ready
    console.log('ngAfterViewInit called');
    console.log('Platform is browser:', isPlatformBrowser(this.platformId));
    console.log('typewriterElement:', this.typewriterElement);
    
    // Use setTimeout to ensure DOM is fully ready
    setTimeout(() => {
      this.initializeTypewriter();
    }, 100);
  }

  ngOnDestroy() {
    // Clean up is handled automatically since we're using setTimeout
    // No manual cleanup needed for our custom implementation
  }

  private initializeTypewriter() {
    // Only initialize typewriter in browser environment
    console.log('initializeTypewriter called');
    if (isPlatformBrowser(this.platformId) && this.typewriterElement && this.typewriterElement.nativeElement) {
      console.log('Initializing custom typewriter...');
      
      // Hide fallback text
      this.showFallback = false;
      
      // Start custom typewriter effect
      this.startCustomTypewriter();
    } else {
      console.log('Typewriter not initialized. Platform browser:', isPlatformBrowser(this.platformId), 
                  'Element exists:', !!this.typewriterElement?.nativeElement);
      // Keep fallback text visible if not in browser
      this.showFallback = true;
    }
  }

  private startCustomTypewriter() {
    const element = this.typewriterElement.nativeElement;
    const texts = [
      "Shubham Bhardwaj, a Frontend Developer.",
      "open to work."
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeSpeed = 75;
    const deleteSpeed = 50;
    const pauseTime = 2000;
    
    const type = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        // Deleting characters
        element.innerHTML = currentText.substring(0, charIndex - 1) + '<span class="cursor">|</span>';
        charIndex--;
        
        if (charIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(type, typeSpeed);
        } else {
          setTimeout(type, deleteSpeed);
        }
      } else {
        // Typing characters
        element.innerHTML = currentText.substring(0, charIndex + 1) + '<span class="cursor">|</span>';
        charIndex++;
        
        if (charIndex === currentText.length) {
          isDeleting = true;
          setTimeout(type, pauseTime);
        } else {
          setTimeout(type, typeSpeed);
        }
      }
    };
    
    // Start typing
    setTimeout(type, 500);
  }
}
