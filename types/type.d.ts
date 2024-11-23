import {TextInputProps, TouchableOpacityProps} from "react-native";

declare interface Driver {
    driver_id: number;
    first_name: string;
    last_name: string;
    profile_image_url: string;
    car_image_url: string;
    car_seats: number;
    rating: number;
}

declare interface MarkerData {
    latitude: number;
    longitude: number;
    id: number;
    title: string;
    profile_image_url: string;

    car_image_url: string;
    car_seats: number;
    rating: number;
    first_name: string;
    last_name: string;
    time?: number;
    price?: string;
}

declare interface MapProps {
    destinationLatitude?: number;
    destinationLongitude?: number;
    onDriverTimesCalculated?: (driversWithTimes: MarkerData[]) => void;
    selectedDriver?: number | null;
    onMapReady?: () => void;
}

declare interface Ride {
    origin_address: string;
    destination_address: string;
    origin_latitude: number;
    origin_longitude: number;
    destination_latitude: number;
    destination_longitude: number;
    ride_time: number;
    fare_price: number;
    payment_status: string;
    driver_id: number;
    user_email: string;
    created_at: string;
    driver: {
        first_name: string;
        last_name: string;
        car_seats: number;
    };
}

declare interface User {
    user_id: Key | null | undefined;
    first_name: string;
    last_name: string;
    profile_image_url: string;
    contact_number: number;
    email: string;
    gender: string;
    location: string;
    birth_date: string;
    alt_number: string;
}

declare interface Resume {
    profession: string;
    work_description: string;
    qualification_samary: string;
    id: Key | null | undefined;
    name: string;
    gender: string;
    birthday: string;
    location: string;
    email: string;
    phone: string;
    summary: string;
    education: string;
    workHistory: string;
    references: string;
    skill: string;
    certification: string;
    language: string;
    linkedin: string;
    description: string;
    lastUpdated: string;
}

export interface Message {
    id: string;
    text: string;
    senderId: string;
    timestamp: { seconds: number; nanoseconds: number }; // Firestore timestamp structure
  }

  export interface chatsData {
    id: string;
    name: string;
    imageUrl: string;
    lastMessage: string;
    lastMessageTimestamp: {
      seconds: number;
      nanoseconds: number;
    };
  }
  
  

interface UserCardProps {
  user: {
    id: string;
    name: string;
    profession: string;
    qualification: string;
    profileImageUrl?: string;
  };
  onPress: () => void;
}

declare interface Job {
    id: Key | null | undefined;
    Company: string;
    Salary: string;
    Position: string;
    Type: string;
    Setting: string;
    Description: string;
    Deadline: string;
    Location: string;
    Education: string;
    Experience: string;
    Skills: string;
    Duties: string;
    Benefits: string;
}

declare interface ButtonProps extends TouchableOpacityProps {
    title: string;
    bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
    textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
    IconLeft?: React.ComponentType<any>;
    IconRight?: React.ComponentType<any>;
    className?: string;
}

declare interface GoogleInputProps {
    icon?: string;
    initialLocation?: string;
    containerStyle?: string;
    textInputBackgroundColor?: string;
    handlePress: ({
                      latitude,
                      longitude,
                      address,
                  }: {
        latitude: number;
        longitude: number;
        address: string;
    }) => void;
}

declare interface InputFieldProps extends TextInputProps {
    label: string;
    icon?: any;
    secureTextEntry?: boolean;
    labelStyle?: string;
    containerStyle?: string;
    inputStyle?: string;
    iconStyle?: string;
    className?: string;
    multiline?: boolean;
}

declare interface PaymentProps {
    fullName: string;
    email: string;
    amount: string;
    driverId: number;
    rideTime: number;
}

declare interface LocationStore {
    userLatitude: number | null;
    userLongitude: number | null;
    userAddress: string | null;
    destinationLatitude: number | null;
    destinationLongitude: number | null;
    destinationAddress: string | null;
    setUserLocation: ({
                          latitude,
                          longitude,
                          address,
                      }: {
        latitude: number;
        longitude: number;
        address: string;
    }) => void;
    setDestinationLocation: ({
                                 latitude,
                                 longitude,
                                 address,
                             }: {
        latitude: number;
        longitude: number;
        address: string;
    }) => void;
}

declare interface DriverStore {
    drivers: MarkerData[];
    selectedDriver: number | null;
    setSelectedDriver: (driverId: number) => void;
    setDrivers: (drivers: MarkerData[]) => void;
    clearSelectedDriver: () => void;
}

declare interface DriverCardProps {
    item: MarkerData;
    selected: number;
    setSelected: () => void;
}