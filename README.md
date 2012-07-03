jordan-rest-example
===================

An example of the rest interface.

Interface
===================

User
 - Get User (GET)
   - gets the database primary key of the user and there details given the sfu computing id
Request: { command: "getuser", id: "jrf2" }
   - success
Response: { command: "getuser", id: "jrf2", code: 0, user_id: 0, firstname: "jordan", lastname: "fox", Type: 2 }
   - error: user is not in the database
   - error: id is missing
   - error: command != "getuser"

 - Add User (POST)
   - adds a new user profile to the database
Request: { command: "adduser", id: "jrf2", firstname: "jordan", lastname: "fox", Type: 2 }
Types? (0 - Student, 1 - Instructor, 2 - Admin}
   - success
Response: { command: "adduser", id: "jrf2", code: 0, message: "user added successfully" }
   - error: user is already in the database
   - error: a field is missing
   - error: command != "adduser"

 - Set User (PUT)
   - change one or more of the users information fields, id or user_id is required
Request: { command: "setuser", id: "jrf2", firstname: "jordan" }
   - success
Response: { command: "setuser", id: "jrf2", code: 0, message: "user update successfully" }
   - error: user is not in the database
   - error: command != "adduser"
 
 - Delete User (DELETE)
   - note: I have not added delete because removing a user should only be done for debugging
 
===================

Courses
 - Add/Update/Delete Course (POST/PUT/DELETE)
   - note: I assumed this would be done automatically and not through REST
   
 - Get Course (GET)
   - get the details of a course given a course id
Request: { command: "getcourse", course_id: 0 }
   - success
Response: { command: "getcourse", dept: "cmpt", number: "376W", section: "D100", Semester: "1111" }
   - error: course not in database
   - error: command != "getcourse"

===================

Likes
 - Add Like
   - user likes a resource
Request: { command: "addlike", User_id: 0, Resource_id: 0 }
   - success
Response: { command: "addlike", code: 100, message: "message" }
   - error: user_id or resource_id not found
   - error: command != "addlike"
   
===================

Comment
 - Add Comment
   - add a comment, the id of the thing it is added to changes how it is handled
Request: { command: "addcomment", title: "mytitle", body: "body", question_id: 0 }
Request: { command: "addcomment", title: "mytitle", body: "body", comment_id: 0 }
Request: { command: "addcomment", title: "mytitle", body: "body", resource_id: 0 }
Request: { command: "addcomment", title: "mytitle", body: "body", file_id: 0 }
   - success
   - error: resource/comment/question/answer/file not found
   - error: command != "addcomment"

- Get Comments
  - get a single comment (needed?)
Request: { command: "getcomment", comment_id: 0 }
  - returns the comments for a post
Request: { command: "getcomments", post_id: 0 }
  - returns the comments for a user
Request: { command: "getcomments", user_id: 0 }

- Update Comment
  - update a comment
Request: { command: "updatecomment", comment_id: 0, body: "newbody" }
Response: { command: "updatecomment", code: 0, message: "update success" }

- Delete Comment
Request: { command: "deletecomment", comment_id: 0 }

===================

 Tags
 - Get Tags
 - Get Tag
 - Add Tag
Request: { command: "addtag", file_id: 0, start: 0, end: 120, Category: 0 }
 - Update Tag
 - Delete Tag

===================
 
 File
 - GetFiles
 - Get File
 - Add File
Request: { command: "addfile", title:"mytitle", path: "mypath", category_id: 0 }
 - Update
 - Delete
 
===================

StudyGroup
 - Get Study Groups
 - Get Study Group
 - Add Study Group
 - Update Study Group
 - Delete Study Group