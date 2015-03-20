## 2015-03-19

####Echo

* Edit to frontpage font size
* Addition of Related Subreddits thumbnails & rules
* Fix to subreddit subscribe button's width
* Removal of zip files, unused images, hidden.less, flags.less, shelve.less
* Added new PSDs, images
* Misc. file renamings to clarify purpose
* Addition of #nje team tag
* Restructure of sidebar to remove any "&" symbols
* Added fall-backs to sidebar if stylesheet is disabled

**Nightmode changes*

* Removal of tournament header images from nightmode/common.less
* Spun out nightmode/common.less into nightmode/header.less and nightmode/posts.less to more clearly define which rules apply to which sections
* Fix for sidebar headings in nightmode/sidebar.less
* Commented out alternative team spritesheets (since the rules weren't triggering) in nightmode/team.less



## 2015-03-17

####Echo

* Cleanup of common.less (deletion of conflicting/legacy rules)
* Some cleaning in sidebar.less (see above)
* Edits to sidebar rules; "About us" and "Our team" sections now expand on hover
* Removed banner look of h1 elements in sidebar
* Began changes for "Related Subreddits" section in sidebar

**Incorporation of changes by Simon**

* Match ticker -> table in sidebar
* Sidebar promo img



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