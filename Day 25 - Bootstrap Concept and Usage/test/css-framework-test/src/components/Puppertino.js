import './dist/css/Puppertino/layout.css';
import './dist/css/Puppertino/buttons.css';
import './dist/css/Puppertino/forms.css';
import './dist/css/Puppertino/modals.css';
import './dist/css/Puppertino/actions.css';
import './dist/css/Puppertino/segmented-controls.css';
import './dist/css/Puppertino/tabs.css';

const Puppertino = () => {

    return(
        <div style={{border: "2px solid black", margin: "5px", padding:"5px", backgroundColor: "#999"}}>

            <details>

                <summary>
                    <h2 className="p-layout" style={{display: "inline"}}>Puppertino</h2>
                </summary>

                <div>
                    <a href="#" className="p-btn">Default</a>
                    <a href="#" className="p-btn p-btn-disabled">Disabled</a>
                    <a href="#" className="p-btn p-prim-col">Primary</a>
                    <a href="#" className="p-btn p-btn-mob">Btn mob</a>
                    <a href="#" className="p-btn p-btn-round">Rounded</a>
                    <a href="#" className="p-btn p-btn-more">Custom action</a>

                    <div className="p-form-select">
                        <select>
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </select>
                    </div>
                    
                    <div>
                        <input type="email" className="p-form-text" placeholder="email@example.com"/>

                        <input type="text" className="p-form-text p-form-no-validate" placeholder="free text"/>

                        <input type="email" className="p-form-text p-form-truncated" placeholder="Truncated text..."/>

                        <label className="p-form-label">Email: <input type="email" className="p-form-text" placeholder="email@example.com"/></label> 
                    </div>

                    <div>
                        
                        <button class="p-btn" data-p-open-actions="#actions_basic">Basic Actions</button>

                        <div class="p-action-background">

                        <div class="p-action-big-container" id="actions_basic" data-p-close-on-outside="true">
                            <div class="p-action-container">
                            <div class="p-action-title">
                                <h3 class="p-action-title--intern">Welcome to actions</h3>
                                <p class="p-action-text">Select an option below...</p>
                            </div>
                            <a href="#" class="p-action--intern p-action-neutral">New private tab</a>
                            <a href="#" class="p-action--intern">New tab</a>
                            </div>
                            <div class="p-action-container">
                            <a href="#" class="p-action--intern p-action-cancel" data-p-cancel-action="true">Cancel</a>
                            </div>
                        </div>

                        </div>
			
                    </div>

                    <div class="p-segmented-controls p-segmented-radius">
                        <a href="#" class="active">Doom</a>
                        <a href="#">Quake</a>
                    </div>


                    <div class="p-segmented-controls p-segmented-radius p-segmented-internal-radius">
                    <a href="#" class="active">FIFA</a>
                    <a href="#">PES</a>
                    </div>

                    <div class="p-segmented-controls p-segmented-controls-alt">
                    <a href="#" class="active">Thing</a>
                    <a href="#">Stuff</a>
                    <a href="#">Other</a>
                    </div>

                    <div class="p-segmented-controls p-segmented-outline">
                    <a href="#" class="active">Can</a>
                    <a href="#">Dog</a>
                    <a href="#">Pup</a>
                    </div>

                    <div class="p-segmented-controls p-segmented-controls-outline-alt">
                    <a href="#" class="active">Mini</a>
                    <a href="#">May</a>
                    <a href="#">Moe</a>
                    </div>

                    <div class="p-tabs-container" id="tab_example">
                        <div class="p-tabs">
                        <button class="p-tab p-is-active">Service 1</button>
                        <button class="p-tab">Service 2</button>
                        <button class="p-tab">Service 3</button>
                        </div>
                        <div class="p-panels">
                        <div class="p-panel p-is-active">
                            
                        </div>
                        <div class="p-panel">
                            
                        </div>
                        <div class="p-panel">
                            
                        </div>
                        </div>
                    </div>

                    <div class="p-mobile-tabs-content">
                        <div class="p-mobile-tabs--content active" id="demo1">
                            hello
                            </div>
                        <div class="p-mobile-tabs--content" id="demo2">
                            hello
                        </div>
                        <div class="p-mobile-tabs--content" id="demo3">
                            hello
                        </div>
                        <div class="p-mobile-tabs--content" id="demo4">
                            hello
                        </div>
                        
                        <div class="p-mobile-tabs">
                        <div>
                            <a href="#" class="active" data-p-mobile-toggle="#demo1">
                            
                            Home
                            </a>
                        </div>
                        <div>
                            <a href="#" data-p-mobile-toggle="#demo2">
                            
                            News
                            </a>
                        </div>
                        <div>
                            <a href="#" data-p-mobile-toggle="#demo3">
                            
                            Options
                            </a>
                        </div>
                        <div>
                            <a href="#" data-p-mobile-toggle="#demo4">
                            
                            Account
                            </a>
                        </div>
                        </div>
                        </div>
                </div>


            </details>
            
        </div>
    )
};

export default Puppertino;