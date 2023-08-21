import { title } from "@/components/primitives";
import { Input } from "@nextui-org/input";
import { Button} from "@nextui-org/button";

export default function BlogPage() {
	return (
		<>
		<section className="py-6 bg-coolGray-50">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full lg:w-1/2 xl:w-5/12 px-4  lg:mb-0">
        <div className="max-w-lg mx-auto lg:mx-0  ">
          
          <form action="">
		  <Input
              autoFocus
              label="Name"
              placeholder="Enter your email"
              variant="bordered"
              className=""
            />
			<Input
              autoFocus
              label="Email"
              placeholder="Enter your email"
              variant="bordered"
              className="mt-8"
            />
			<Input
              autoFocus
              label="Message"
              placeholder="Enter your email"
              variant="bordered"
              className="mt-8"
            />

            <div className="my-10">
              <span className="block  mb-6">What can we help you with?</span>
              <div className="sm:flex">
                <div className="mb-4 sm:mb-0 sm:mr-8">
                  <div className="form-check mb-4">
                    <input type="checkbox" value=""/>
                    <label className="ml-2">Website design</label>
                  </div>
                  <div className="form-check mb-4">
                    <input type="checkbox" value=""/>
                    <label className="ml-2">Website design</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" value=""/>
                    <label className="ml-2">Website design</label>
                  </div>
                </div>
                <div>
                  <div className="form-check mb-4">
                    <input type="checkbox" value=""/>
                    <label className="ml-2">Content creation</label>
                  </div>
                  <div className="form-check mb-4">
                    <input type="checkbox" value=""/>
                    <label className="ml-2">Content creation</label>
                  </div>
                  <div className="form-check">
                    <input type="checkbox" value=""/>
                    <label className="ml-2">Content creation</label>
                  </div>
                </div>
              </div>
            </div>
            <Button radius="full" color="primary">
              Submit
            </Button>
          </form>
        </div>
      </div>
      <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
        <img className="block max-w-lg mx-auto lg:max-w-none h-4/6 w-full rounded-3xl object-cover" src="https://images.unsplash.com/photo-1661294667246-2492ae1447b4?crop=entropy&amp;cs=srgb&amp;fm=jpg&amp;ixid=M3wzMzIzMzB8MHwxfHNlYXJjaHwzMHx8bWluaW9ufGVufDB8fHx8MTY5MjUxMjU3N3ww&amp;ixlib=rb-4.0.3&amp;q=85&amp;w=1920" alt=""/>
      </div>
    </div>
  
  </div>
</section>
		</>
	);
}
