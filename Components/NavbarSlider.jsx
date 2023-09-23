import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";

function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState("left");

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={setPlacement}></RadioGroup>
      <Button onClick={onOpen} style={{ zIndex: "10", background: "white" }}>
        <i className="fa-solid fa-bars"></i>
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <i
              style={{ fontSize: "20px", padding: "20px" }}
              className="fa-solid fa-xmark"
              onClick={onClose}
            ></i>
          </div>
          <DrawerBody className="navbarSideDrawer">
            <Link>About Us</Link>
            <hr />
            <Link>Terms & Condition</Link>
            <hr />
            <Link>Privacy Policy</Link>
            <hr />
            <Link>FAQ</Link>
            <hr />
            <Link>Reach Us</Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default PlacementExample;
