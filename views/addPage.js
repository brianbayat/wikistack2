const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    
    <div class="form-group">
      <label for="name" class="col-sm-2 control-label"> Name </label>
      <div class="col-sm-10">
        <input id="name" name="name" type="text" class="form-control"/>
      </div>
    </div>
    
    <div class="form-group">
      <label for="email" class="col-sm-2 control-label"> Email </label>
      <div class="col-sm-10">
        <input id="email" name="email" type="email" class="form-control"/>
      </div>
    </div>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div class="form-group">
      <label for="content" class="col-sm-2 control-label"> Content </label>
      <div class="col-sm-10">
        <textarea id="content" name="content" type="text" class="form-control"> </textarea>
      </div>
    </div>
    
    <div class="form-group">
      <label for="status" class="col-sm-2 control-label"> Status</label>
      <div class="col-sm-10" style="display: flex" >
        <div style="display: flex; flex: 1; align-items: center;">
          <label for="statusOpen">Open</label>
          <input id="statusOpen"
          name="status"
          type="radio"
          value="open"
          class="form-control"
          style="width: auto; margin-left: 12px;">
        </div>
        <div style="display: flex; flex: 1; align-items: center;  ">
          <label for="statusClosed">Closed</label>
          <input 
            id="statusClosed"
            name="status"
            type="radio"
            value="closed"
            class="form-control"
            style="width: auto; margin-left: 12px;">
        </div>     
      </div>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);