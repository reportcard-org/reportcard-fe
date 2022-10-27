import './Overview.scss';
import { useNavigate } from 'react-router-dom';

const Overview = () => {
    const navigate = useNavigate()

    return (
        <div className='overview-container'>
            <article className='overview'>
                <p>
                    The effect that a classroom teacher has on a student is sometimes second only to a parent.
                    Nationwide, teachers salaries and work conditions should better reflect the value they provide to our lives. This application is designed to assist teachers in their search for school districts that might better meet their financial needs and provide better work conditions.
                </p>
                <p>
                    Login with a  test email (0-4) and password (test_email0@email.test, Welcome2022 ), then provide an address to search for the nearest school district. Your report Card will provide you with up-to-date, relevant information for educators about the district. You can save this district to your Favorites for later review. If you don't want to save any info or enter an email, you can continue as a guest. Thank you for using our application and for helping create a better future for our children. Welcome to Report Card!
                </p>
                <div className='nav-button-container'>
                    <button className='return-to-login-page-button' onClick={ () => navigate('/login') }>Continue to ReportCard</button>
                </div>
            </article>
        </div>
    );
};

export default Overview;