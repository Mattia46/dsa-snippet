## DSA Template

#### Assumptions

We suggest to have the following states to identify the DSA flow:

 - `contentViolating`: Boolean (Content flagged as violating policies)
 - `contentAppealed`: Boolean (Content appealed)
 - `appealReason`: String (user motivation for the appeal)
 - `appealResponse`: String (overturned, uphold)

The status should be updated via webhooks or used action

#### Flow

 - User send a file/post a content
 - The content is evaluated
 - Update the state `contentViolating: true` if the content flagged as violating policies via
   a `webhook`
 - Allow the user to appeal the decision through a CTA
 - Once the appeal is reviewed we update the `appealReason` via webhook
