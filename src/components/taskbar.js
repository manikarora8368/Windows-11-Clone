import React, { Component } from 'react'
import microsoftStore from '../assets/images/microsoftStore.png';
import microsoftEdge from '../assets/images/microsoftEdge.png';
import searchIcon from '../assets/images/SearchIcon.png';
import windowsicon from '../assets/images/windows11icon.png';
import widgetsIcon from '../assets/images/widgets-icon.png';
import carrot from '../assets/images/carrot.png';
import wifi from '../assets/images/wifi.png';
import battery from '../assets/images/battery.png';
import SearchIcon from '../assets/images/SearchIcon.png';
import MicrosoftTeams from '../assets/images/MicrosoftTeams.png';
import MicrosoftEdge from '../assets/images/microsoftEdge.png';
import word  from '../assets/images/word.png';
import excel  from '../assets/images/excel.png';
import PowerPoint  from '../assets/images/powerpoint.png';
import facebook  from '../assets/images/facebook.png';
import linkedin from '../assets/images/linkedin.png';
import planner  from '../assets/images/planner.png';
import oneNote  from '../assets/images/oneNote.png';
import photos  from '../assets/images/photos.png';
import snippingtool  from '../assets/images/snippingtool.png';
import discord  from '../assets/images/discord.png';
import calculator  from '../assets/images/calculator.png';
import WidgetIcons from '../assets/images/widgets-icon.png';
import MicrosoftStore from '../assets/images/microsoftStore.png';
import fileExplorer from '../assets/images/fileExplorer.png';
import movies from '../assets/images/Movies.png';
import whiteboard from '../assets/images/whiteboard.png';
import wordFile from '../assets/images/wordFile.png';
import xlsx from '../assets/images/xlsx.png';
import power from '../assets/images/power.png';
import myphoto from '../assets/images/myphoto.jpeg';
export default class taskbar extends Component {
    constructor(props){
        super(props);
        this.state={currentDate:'',currentTime:''};
    }
    SearchClick=(e)=>{
        var SearchMain = document.querySelector('.Search-main');
        var SearchClicked = document.querySelector('.searchIcon img');
        if(e.target === SearchClicked){
          SearchMain.classList.toggle('Search-bar-clicked');
        }
    }
    carrotClick=()=>{
        var carrotMain = document.querySelector('.carrot-popup');
        carrotMain.classList.toggle('carrot-popup-active');
    }
    widgetClick=()=>{
        var WidgetMain = document.querySelector('.widget-main');
        WidgetMain.classList.toggle('widget-main-active');
    }
    componentDidMount(){
        setInterval(()=>{
            let day = new Date().getDate()+'/' +( new Date().getMonth()+1) + '/'+ new Date().getFullYear();
           
            var hours = new Date().getHours();
            var time = '';
            var minutes = new Date().getMinutes();
            if(minutes< 10){
                minutes = '0'+minutes;
            }
            if(hours>11&& hours===12){
                time =hours+':' +minutes+ ' PM';
            }
            else if(hours>11){
                hours = hours%12;
                time =hours+':'+ minutes+ ' PM';
            }
            else if(hours%12<10){
                time = '0'+hours+':' +minutes+ ' AM';
            }
            else{
                 time = new Date().getHours()+':' +minutes+ ' AM';
            }
            this.setState({
                currentDate: day,
            currentTime: time
           } );
        },1000);
    }
    render() {
        return (
            <div className="taskbar-main">
                <div className="empty"><div className="rightTaskbarImgMain"><img className="carrot taskbarImg" src={carrot} alt=""/></div>
                    <div className="rightTaskbarImgMain"><img className="taskbarImg" src={wifi} alt=""/></div>
                    <div className="rightTaskbarImgMain"><img className=" battery taskbarImg" src={battery} alt=""/></div>
                    <div className="dateAndTime rightTaskbarImgMain"> 
                    <div className="time">{this.state.currentTime}</div>
                    <div className="date">{this.state.currentDate}</div>
                    </div></div>
                <div className="taskbarIcon">
                <div className="taskbarImgMain">
                <img className="taskbarImg" src={windowsicon} alt=""/>
                </div>
                <div className="taskbarImgMain">
                <img className="taskbarImg" src={microsoftStore} alt=""/>
                </div>
                <div className="taskbarImgMain">
                <img className="taskbarImg" src={microsoftEdge} alt=""/>
                </div>
                <div className="taskbarImgMain searchIcon" onClick={this.SearchClick}>
                <img className="taskbarImg" src={searchIcon} alt=""/>
                <div className="Search-main">
                <div className="search-bar">
                    <img src={SearchIcon} alt=""/>
                    <input type="text" placeholder="Type here to search"/>
                </div>
                <div className="Pinned">
                    <div className="PinnedText">
                        Pinned
                    </div>
                    <div className="allApps"> 
                        <select name="cars" id="">
                            <option value="allApps">All Apps</option>
                            <option value="Pinned">Pinned</option>
                        </select>
                    </div>
                </div>
                <div className="grid">
            <div>
                <img src={MicrosoftEdge} alt="" />
                <div className="iconLabel">Edge</div>
            </div>
            <div>
                <img src={word} alt="" />
                <div className="iconLabel">Word</div>
            </div>
            <div>
                <img src={excel} alt="" />
                <div className="iconLabel">Excel</div>
            </div>
            <div>
                <img src={PowerPoint} alt="" />
                <div className="iconLabel">PowerPoint</div>
            </div>
            <div>
                <img src={MicrosoftTeams} alt="" />
                <div className="iconLabel">Microsoft Teams</div>
            </div>
            <div>
                <img src={planner} alt="" />
                <div className="iconLabel">Planner</div>
            </div>
            <div>
                <img src={MicrosoftStore} alt="" />
                <div className="iconLabel">Microsoft Store</div>
            </div>
            <div>
                <img src={photos} alt="" />
                <div className="iconLabel">Photos</div>
            </div>
            <div>
                <img src={oneNote} alt="" />
                <div className="iconLabel">OneNote</div>
            </div>
            <div>
                <img src={facebook} alt="" />
                <div className="iconLabel">Facebook</div>
            </div>
            <div>
                <img src={discord} alt="" />
                <div className="iconLabel">Discord</div>
            </div>
            <div>
                <img src={linkedin} alt="" />
                <div className="iconLabel">LinkedIn</div>
            </div>
            <div>
                <img src={WidgetIcons} alt="" />
                <div className="iconLabel">Widgets</div>
            </div>
            <div>
                <img src={calculator} alt="" />
                <div className="iconLabel">Calculator</div>
            </div>
            <div>
                <img src={movies} alt="" />
                <div className="iconLabel">Movies</div>
            </div>
            <div>
                <img src={snippingtool} alt="" />
                <div className="iconLabel">Snipping Tool</div>
            </div>
            <div>
                <img src={whiteboard} alt="" />
                <div className="iconLabel">Whiteboard</div>
            </div>
            <div>
                <img src={fileExplorer} alt="" />
                <div className="iconLabel">File Explorer</div>
            </div>
                </div>
                <div className="Pinned">
                    <div className="PinnedText">
                        Recommended
                    </div>
                    <div className="allApps"> 
                        <select name="cars" id="">
                            <option value="allApps">More</option>
                            <option value="Pinned">Pinned</option>
                        </select>
                    </div>
                </div>
                <div className="grid-2">
                    <div><img src={wordFile} alt="" /> <div>Travel itinerary <br/> 17m ago</div></div>
                    <div><img src={xlsx} alt="" /> <div>Expense Worksheet <br/> 12h ago</div></div>
                    <div><img src={xlsx} alt="" /> <div>Travel itinerary <br/> 17m ago</div></div>
                    <div><img src={wordFile} alt="" /> <div>Expense Worksheet <br/> 12h ago</div></div>
                </div>
                <div className="login-cred">
                    <div>
                    <img className="myphoto" src={myphoto} alt="" />
                    Manik Arora
                    </div>
                    <img className="power" src={power} alt="" />
                </div>
            </div>
                </div>
                <div className="taskbarImgMain widget" onClick={this.widgetClick}>
                <img className="taskbarImg" src={widgetsIcon} alt=""/>
                <div className="widget-main"></div>
                </div>
                <div className="taskbarImgMain">
                <img className="taskbarImg" src={MicrosoftTeams} alt=""/>
                </div>
                <div className="taskbarImgMain">
                <img className="taskbarImg" src={fileExplorer} alt=""/>
                </div>
                </div>
                <div className="right-taskbar">
                    <div className="rightTaskbarImgMain carrot-main" onClick={this.carrotClick}><img className="carrot taskbarImg" src={carrot} alt=""/>
                    <div className="carrot-popup"></div>
                    </div>
                    <div className="rightTaskbarImgMain"><img className="taskbarImg" src={wifi} alt=""/></div>
                    <div className="rightTaskbarImgMain"><img className=" battery taskbarImg" src={battery} alt=""/></div>
                    <div className="dateAndTime rightTaskbarImgMain"> 
                    <div className="time">{this.state.currentTime}</div>
                    <div className="date">{this.state.currentDate}</div>
                    </div>
                </div>
            </div>
        )
    }
}
