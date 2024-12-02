import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

const blogUrl = environment.blogBackend

@Component({
  selector: 'app-blog-explore',
  templateUrl: './blog-explore.component.html',
  styleUrls: ['./blog-explore.component.scss']
})
export class BlogExploreComponent {

  postdate:any;
  recentBlogs: any;
  allBlogs:any;
  blogId:any
  count:any=0
  counts:any=0
  category:any;
  bankPosts:any;
  sscPosts:any;
  tnpscPosts:any;
  posts:any=[]
  Object = Object
  constructor(private http: HttpClient,private router: Router) {

     // this.http.post(blogUrl+'getBlogs',{}).subscribe((data:any)=>{
    //  this.recentBlogs = data.data
    //  this.posts = data.data1[0]
     
    // })
  
    this.http.post("https://resultbackend.verandarace.com/result/findArticle",{vertical:"IAS"}).subscribe((data:any)=>{
      console.log('data test',data);
      
     this.allBlogs = data.data
      console.log(this.allBlogs);
      
    })

  }

  viewMore(category: string) {
    // Navigate to the category page with additional data
    this.router.navigate(['/blogs/category', category]);
  }

}
