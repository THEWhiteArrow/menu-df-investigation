import { ReactComponent as ArrowRight } from "./arrow_right.svg";

export default function ProductMenu() {
  return (
    <div className="extended-menu product menu flex ">
      <div className="menu mt-5 mx-3 bg-white p-5 rounded-lg">
        <div className="flex text-rw p-5 bg-[purple] ">
          <a href="/">Platform</a>
        </div>
        <div className="flex flex-row">
          <ul className="pr-10 flex flex-col ">
            <h3 className="flex mb-3">Products</h3>
            <li className="flex items-center">
              <a href="/product#">
                <span>Employer of Record</span> <ArrowRight />
              </a>
            </li>
            <li className="flex items-center">
              <a href="/product#">
                <span>Contract Managment</span> <ArrowRight />
              </a>
            </li>
            <li className="flex items-center">
              <a href="/product#">
                <span>Global Payroll</span> <ArrowRight />
              </a>
            </li>
            <li className="flex items-center">
              <a href="/product#">
                <span>HRIS Software</span> <ArrowRight />
              </a>
            </li>
            <li className="flex items-center">
              <a href="/product#">
                <span>Remote Relocation</span> <ArrowRight />
              </a>
            </li>
            <li className="flex items-center">
              <a href="/product#">
                <span>Employer of Record</span> <ArrowRight />
              </a>
            </li>
            <li className="flex items-center">
              <a href="/product#">
                <span>Contract Managment</span> <ArrowRight />
              </a>
            </li>
            <li className="flex items-center">
              <a href="/product#">
                <span>Global Payroll</span> <ArrowRight />
              </a>
            </li>
            <li className="flex items-center">
              <a href="/product#">
                <span>HRIS Software</span> <ArrowRight />
              </a>
            </li>
            <li className="flex items-center">
              <a href="/product#">
                <span>Remote Relocation</span> <ArrowRight />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="menu mt-5 mx-3 bg-white p-5 rounded-lg">
        <div className="flex text-rw p-5 bg-[orange] ">
          <a href="/">Platform</a>
        </div>
        <div className="flex flex-row">
          <ul className="pr-10 flex flex-col ">
            <h3 className="flex mb-3">Products</h3>
            <li className="flex items-center">
              <a href="/product#">
                <span>Employer of Record</span> <ArrowRight />
              </a>
            </li>

            <li className="flex items-center">
              <a href="/product#">
                <span>Global Payroll</span> <ArrowRight />
              </a>
            </li>
            <li className="flex items-center">
              <a href="/product#">
                <span>HRIS Software</span> <ArrowRight />
              </a>
            </li>
            <li className="flex items-center">
              <a href="/product#">
                <span>Remote Relocation</span> <ArrowRight />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="menu mt-5 mx-3 bg-white p-5 rounded-lg">
        <div className="flex text-rw p-5 bg-[green] ">
          <a href="/">Platform</a>
        </div>
        <div className="flex flex-row">
          <ul className="pr-10 flex flex-col ">
            <h3 className="flex mb-3">Products</h3>
            <li className="flex items-center">
              <a href="/product#">
                <span>Employer of Record</span> <ArrowRight />
              </a>
            </li>
            <li className="flex items-center">
              <a href="/product#">
                <span>Global Payroll</span> <ArrowRight />
              </a>
            </li>
            <li className="flex items-center">
              <a href="/product#">
                <span>HRIS Software</span> <ArrowRight />
              </a>
            </li>
            <li className="flex items-center">
              <a href="/product#">
                <span>Remote Relocation</span> <ArrowRight />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
