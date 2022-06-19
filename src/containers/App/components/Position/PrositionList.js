import React from 'react'





const PrositionList= () => {
  return (
    <>
    <ul className="menu">
  {/* <!-- menu header text --> */}
  <li className="divider" data-content="Open Position">
  </li>
  {/* <!-- menu item standard --> */}
  {/* <li class="menu-item">
    <a href="#">
      <i class="icon icon-link"></i> Open Position
    </a>
  </li> */}
  {/* <!-- menu item with form control --> */}
  {/* <li class="menu-item">
    <label class="form-checkbox"> */}
      {/* <input type="checkbox"> */}
      {/* <i class="form-icon"></i> form-checkbox
    </label>
  </li> */}
  {/* <!-- menu divider --> */}
  <li className="divider"></li>
  {/* <!-- menu item with badge --> */}
  <li className="menu-item">
    <a href="#">
      <i className="icon icon-2x icon-people"></i> Settings
    </a>
    <div className="menu-badge">
      <label className="label label-primary">2</label>
    </div>
  </li>

  <li className="menu-item">
    <a href="#">My profile</a>
    <div className="menu-badge">
      <label className="form-checkbox">
        {/* <input type="checkbox"> */}
        <i className="icon icon-2x icon-mail"> Hi</i>
      </label>
    </div>
  </li>
</ul>
</>
  )
}

export default PrositionList