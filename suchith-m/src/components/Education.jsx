function Education() {
    return (
        <>
            <div
                id="education"
                className="h-full w-full flex flex-col bg-map-image bg-no-repeat bg-cover items-center p-14 pt-12 m-8 mx-auto max-lg:p-0 "
            >
                <span className="text-4xl max-lg:text-2xl font-bold max-sm:text-xl">
                    Education
                </span>
                <div className="w-4/5">
                    <div className="flex flex-col gap-2 items-center justify-between mt-12 max-lg:mt-5">
                        <div className="flex justify-between w-full font-semibold text-xl max-lg:text-sm max-lg:flex-col">
                            <span className="">New Horizon College of Engineering, Bengaluru</span>
                            <span>2018 - 2022</span>
                        </div>
                        <span className="w-full text-blue-700 font-semibold text-base max-lg:text-xs">
                            Bachelor of Engineering in Electronics and Communication Engineering
                        </span>
                        <span className="w-full text-gray-950 font-medium text-base max-lg:text-xs mt-2">
                            GPA: 9.17
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education;
