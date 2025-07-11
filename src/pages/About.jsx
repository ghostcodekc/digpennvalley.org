import React from 'react';
import { BOARD_MEMBERS } from '../data/boardMembers';
import { Header } from '../components/Header';

export const About = ({ isPreview = false }) => (
    <div id="about" className="bg-white pb-10">
        { !isPreview && <Header title="About Us" subtitle="Our Mission, Vision, and the team making it happen." /> }
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
                <br></br><h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800">Our Mission</h2><br></br>
            </div>
                <p className="text-gray-500 dark:text-gray-400">DIG is a not-for-profit, charitable organization dedicated to promoting community through the care and enhancement of Penn Valley Off-Leash Dog Park in Kansas City, Missouri.</p><br></br>
                { !isPreview && (
                    <>
                <p className="text-gray-500 dark:text-gray-400">We accomplish this primarily by:</p>
                <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                    <li>Raising funds and volunteering time to develop the physical structure and overall conditions of the park.</li>
                    <li>Advocating with appropriate governmental officials and other organizations to promote the park's needs and its patrons' concerns.</li>
                    <li>Promoting responsible dog ownership and social engagement through educational, dog-friendly events and volunteer opportunities.</li>
                    <li>Supporting other charitable pet organizations when appropriate.</li>
                </ul>
                </>
                )}
            </div>
            { !isPreview && (
                    <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">History Landmark Achievements</h2><br></br>
            </div>
            <p className="text-gray-500 dark:text-gray-400">The Dogpark Improvement Group (DIG) is a 501(C)3 non-profit organization created in 2007. DIG's founders saw great, untapped potential in the Penn Valley Off-Leash Dog Park and came together to create an organization dedicated to its improvement.</p><br></br>
            <p className="text-gray-500 dark:text-gray-400">Since its inception, DIG has made a number of accomplishments over the years:</p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                <li>Raised funds to put in parking lot and expand off-leash area</li>
                <li>Privately funded construction of the small dog area</li>
                <li>Hosted several park clean-up days</li>
                <li>Planted trees</li>
                <li>Helped support several dog welfare and dog park organizations</li>
                <li>Hosted dog-friendly community events</li>
            </ul><br></br>
            <p className="text-gray-500 dark:text-gray-400">In 2011, DIG went on hiatus due to a lack of volunteers and board members. During this time, the Penn Valley Off-Leash Dog Park continued to be maintained by the Kansas City Parks and Recreation Department. DIG was on hiatus from 2011 to 2019. In May of 2020, Jesi Dang partnered with Jon Lowe, a founding DIG board member, and applied for reinstatement to continue the good work of its founders. Together as president and vice president, Jesi and Jon put together a new board of directors to lead the organization. In its reincarnation, the board of directors has been working tirelessly to revamp the organization and connect with local government agencies, parks committees, and the community to ensure its effectiveness in representing the Penn Valley Off-Leash Dog Park and its patrons, human and canine alike.</p>
        </div>
        </>
        )}


        { !isPreview && (
                    <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Board of Directors</h2>
                <p className="mt-4 text-lg text-gray-600">The team leading the charge.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                {BOARD_MEMBERS.map(member => (
                    <div key={member.id} className="bg-gray-50 rounded-lg shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <img 
                            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-accent"
                            src={member.imageUrl} 
                            alt={`Portrait of ${member.name}`}
                        />
                        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                        <p className="text-md font-semibold text-secondary mb-3">{member.title}</p>
                        <p className="text-gray-600 text-sm">{member.description}</p>
                    </div>
                ))}
            </div>
        </div></>
        )}
    </div>
);