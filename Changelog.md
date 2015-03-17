## 2015-03-16

####Echo

* Incorporated post flair changes; deleted sprites/flairs.less
* Added CSS for Reddit editor fixes (due to expanded width of sidebar) in editor-fixes.less
* Incorporated changes to header tournament logos
* Merge of sprites/*.less into headers, sidebar, mixins.less; deletion of sprites/*.less

**Incorporation of changes by Simon**

* Increase in font size for post titles to match larger thumbnails


## 2015-03-13

####Echo

* Cleanup of less files (excluding nightmode less files)
* Simplification of team icon selectors & rules
* Addition of Riot-approved team tags to teams.less
* Addition of posts.less and header.less, spun out from common.less, in an attempt to make it clearer which rules go where (need clarification on whether the tables should go in common.less or posts.less though)
* Added disabled stylesheet warning to posts.less

**Incorporation of changes by Simon**

* Hide post ranking
* New thumbnail rules (size, position)
* Post votes have been vertically recentered for new thumbnail size (100x70)