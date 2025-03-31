import Msgbox from "@/components/Msgbox";
import {auth, signOut} from "@/auth";
import {Button} from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home= async ()=> {

    const session = await auth()
    return (
        <div className="py-20">

           <Msgbox />
            <form className="px-10 pt-[100px]"
            action ={async() => {
                "use server";
                await signOut({redirectTo: ROUTES.SIGN_IN})
            }} >
                <Button type="submit">
                    Log out
                </Button>
            </form>
        </div>
    )
}

export default Home;
