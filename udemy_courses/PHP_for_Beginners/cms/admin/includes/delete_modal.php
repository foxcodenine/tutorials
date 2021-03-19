<!-- Trigger the modal with a button -->
<button style="display:none;" type="button" class="btn btn-info btn-lg modal-toggle-btn" data-toggle="modal" data-target="#myModal">Open Modal</button>

<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button id="modale_close" type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Delete Box</h4>
      </div>
      <div class="modal-body">
        <p>You're sure you want to delete this?</p>
      </div>
      <div class="modal-footer">
        
        <button id="modale_delete" type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>
        <button id="modale_cancel" type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
      </div>
    </div>

  </div>
</div>