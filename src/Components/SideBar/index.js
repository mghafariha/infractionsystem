import React from 'react';
import { Link } from 'react-router-dom';

 class SideBar extends React.Component {
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar" >
                    
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">منو اصلی</li>
                        <li className="treeview">
                            <a href="#">
                              
                                <span className="label label-primary pull-left">4</span>
                                <span className="pull-right-container ">
                                <span>چاه</span>
                                <i className="fa fa-th"></i>
                                {/* <i className="fa fa-files-o"></i> */}
                              
                                </span>
                            </a>
                            <ul className="treeview-menu">
                                   {/* <li><Link to="/Profile"><i className="fa fa-circle-o"></i>اطلاعات شناسنامه ای</Link></li>
                                    <li><Link to="/Visit"><i className="fa fa-circle-o"></i>اطلاعات بازدید </Link></li>
                                    <li><Link to="/VisitWithoutProfile"><i className="fa fa-circle-o"></i> اطلاعات بازدید فاقد شناسنامه</Link></li>
                                    <li><Link to="/Violation"><i className="fa fa-circle-o"></i>تخلفات</Link></li> */}
                                 
                               <li className="treeview">
                                <a href="#">
                                <i className="fa fa-pie-chart"></i>
                                <span className="label label-primary pull-left">1</span>
                                <span className="pull-right-container ">
                                <span>گزارشات</span>
                                </span>
                                 </a>
                                 <ul className="treeview-menu">
                                <li> <a  href={'Report?reportName=Table18'}><i className="fa fa-circle-o"></i> اضافه برداشت</a></li>
                                <li><a href={'Report?reportName=Table16'}><i className="fa fa-circle-o"></i> پر و مسلوب نمودن</a></li>
                                
                                <li><a href={'Report?reportName=form1'}><i className="fa fa-circle-o"></i> نصب و پلمپ کنتور</a></li>
                                <li><a href={'Report?reportName=Tabel14'}><i className="fa fa-circle-o"></i> شناسایی تقلیل منصوبات</a></li>
                                <li><a href={'Report?reportName=Tabel15'}><i className="fa fa-circle-o"></i> عملکرد وضعیت چاه مجاز</a></li>
                                <li><a href={'Report?reportName=Tabel19'}><i className="fa fa-circle-o"></i> عملکرددرشناسایی چاه غیر مجاز</a></li>
                                <li><a href={'Report?reportName=ReportViolation'}><i className="fa fa-circle-o"></i>گزارشات تخلفات</a></li>
                                <li><a href={'Report?reportName=form2'}><i className="fa fa-circle-o"></i> پلمپ چاه غیرمجاز</a></li>
                                <li><a href={'Report?reportName=form6'}><i className="fa fa-circle-o"></i> پلمپ چاه مجازدارای تخلف</a></li>
                                </ul>
                        </li>
                        
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                              
                                <span className="label label-primary pull-left">4</span>
                                <span className="pull-right-container">
                                <span>چشمه</span>
                                <i className="fa fa-th"></i>
                              
                                </span>
                            </a>
                            <ul className="treeview-menu">
                            
                                <li><i className="fa fa-circle-o"></i> اطلاعات شناسنامه ای</li>
                                <li><i className="fa fa-circle-o"></i>بازدید</li>
                                <li><i className="fa fa-circle-o"></i> تخلف</li>
                               <li className="treeview">
                                <a href="#">
                                <i className="fa fa-pie-chart"></i>
                                <span className="label label-primary pull-left">1</span>
                                <span className="pull-right-container">
                                <span>گزارشات</span>
                                </span>
                                 </a>
                                 <ul className="treeview-menu">
                                <li><i className="fa fa-circle-o"></i> گزارش 1</li>
                             
                                </ul>
                        </li>
                        
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                              
                                <span className="label label-primary pull-left">4</span>
                                <span className="pull-right-container">
                                <span>قنات</span>
                                <i className="fa fa-th"></i>
                              
                                </span>
                            </a>
                            <ul className="treeview-menu">
                            
                                <li><i className="fa fa-circle-o"></i> اطلاعات شناسنامه ای</li>
                                <li><i className="fa fa-circle-o"></i>بازدید</li>
                                <li><i className="fa fa-circle-o"></i> تخلف</li>
                               <li className="treeview">
                                <a href="#">
                                <i className="fa fa-pie-chart"></i>
                                <span className="label label-primary pull-left">1</span>
                                <span className="pull-right-container">
                                <span>گزارشات</span>
                                </span>
                                 </a>
                                 <ul className="treeview-menu">
                                <li><i className="fa fa-circle-o"></i> گزارش 1</li>
                             
                                </ul>
                        </li>
                        
                            </ul>
                        </li>
                        <li className="treeview">
                            <a href="#">
                              
                                <span className="label label-primary pull-left">4</span>
                                <span className="pull-right-container">
                                <span>دستگاه حفاری</span>
                                <i className="fa fa-th"></i>
                              
                                </span>
                            </a>
                            <ul className="treeview-menu">
                            
                                <li><i className="fa fa-circle-o"></i> اطلاعات شناسنامه ای</li>
                                <li><i className="fa fa-circle-o"></i>بازدید</li>
                                <li><i className="fa fa-circle-o"></i>  بازدید بدون شناسنامه</li>
                                <li><i className="fa fa-circle-o"></i> تخلف</li>
                               <li className="treeview">
                                <a href="#">
                                <i className="fa fa-pie-chart"></i>
                                <span className="label label-primary pull-left">1</span>
                                <span className="pull-right-container">
                                <span>گزارشات</span>
                                </span>
                                 </a>
                                 <ul className="treeview-menu">
                                <li><i className="fa fa-circle-o"></i> گزارش 1</li>
                             
                                </ul>
                        </li>
                        
                            </ul>
                        </li>
                        {/* <li>
                        <a href="pages/widgets.html">
                            <i className="fa fa-th"></i> <span>Widgets</span>
                            <span className="pull-right-container">
                            <small className="label pull-right bg-green">new</small>
                            </span>
                        </a>
                        </li>
                        <li className="treeview">
                        <a href="#">
                            <i className="fa fa-pie-chart"></i>
                            <span>Charts</span>
                            <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul className="treeview-menu">
                            <li><a href="pages/charts/chartjs.html"><i className="fa fa-circle-o"></i> ChartJS</a></li>
                            <li><a href="pages/charts/morris.html"><i className="fa fa-circle-o"></i> Morris</a></li>
                            <li><a href="pages/charts/flot.html"><i className="fa fa-circle-o"></i> Flot</a></li>
                            <li><a href="pages/charts/inline.html"><i className="fa fa-circle-o"></i> Inline charts</a></li>
                        </ul>
                        </li>
                        <li>
                        <ul className="treeview-menu">
                            <li><a href="pages/tables/simple.html"><i className="fa fa-circle-o"></i> Simple tables</a></li>
                            <li><a href="pages/tables/data.html"><i className="fa fa-circle-o"></i> Data tables</a></li>
                        </ul>
                        </li>
                        <li>
                        <a href="pages/calendar.html">
                            <i className="fa fa-calendar"></i> <span>Calendar</span>
                            <span className="pull-right-container">
                            <small className="label pull-right bg-red">3</small>
                            <small className="label pull-right bg-blue">17</small>
                            </span>
                        </a>
                        </li>
                        <li>
                        <a href="pages/mailbox/mailbox.html">
                            <i className="fa fa-envelope"></i> <span>Mailbox</span>
                            <span className="pull-right-container">
                            <small className="label pull-right bg-yellow">12</small>
                            <small className="label pull-right bg-green">16</small>
                            <small className="label pull-right bg-red">5</small>
                            </span>
                        </a>
                        </li> */}
                    </ul>
                </section>
                
            </aside> 
        )
    }
}
export default SideBar