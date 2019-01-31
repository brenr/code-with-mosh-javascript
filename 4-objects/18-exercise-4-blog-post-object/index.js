/**
 * Properties:
 *  String title
 *  String body
 *  String author
 *  Integer views
 *  Object[] comments
 *    [{String author, String body}]
 *  Boolean isLive
 */

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = new Array();
  this.isLive = false;
  this.publish = function() {
    this.isLive = true;
    return this;
  };
  this.view = function() {
    if (!this.isLive) {
      console.warn('The post you requested has not yet been published.');
    } else {
      console.log(
        this.title +
          '\nby ' +
          this.author +
          '\t\t' +
          this.views +
          ' views' +
          '\n\n' +
          this.body
      );
      if (this.comments.length > 0) {
        console.log('\nComments (' + this.comments.length + ')\n');
        var comments = '';
        for (let comment of this.comments) {
          comments +=
            '\n >  "' + comment.body + '"\n\tposted by ' + comment.author;
        }
        console.log(comments);
      }
    }
    return this;
  };
  this.commentOn = function(body, author) {
    if (!this.isLive) {
      console.warn(
        'Invalid action! Author must publish post before commenting.'
      );
    } else {
      this.comments.push({ body, author });
    }
    return this;
  };
}

let post1 = new Post(
  'Becoming a Software Engineer',
  'I am coding with Mosh!',
  'Brendan'
);

post1.publish();

post1.commentOn("That's great news!", 'Fred').view();
