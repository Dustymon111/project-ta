import Link from "next/link"
import Image from "next/image"
import {TbArrowBigRightFilled} from 'react-icons/tb'

export function Navigation () {
    return (
        <div className="w-64 bg-gray-800 h-screen p-5">
        <div className="flex items-center space-x-3 mb-5">
                <Image src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" width="100" height="100"/>
                <span className="text-white text-xl">Toko</span>
            </div>
            <ul id="menu" class="space-y-3">
                <li className="menu-item text-gray-300 hover:bg-gray-700 p-3 rounded-lg cursor-pointer">Produk</li>
                <li className="menu-item text-gray-300 hover:bg-gray-700 p-3 rounded-lg cursor-pointer">Kategori</li>
                <li className="menu-item text-gray-300 hover:bg-gray-700 p-3 rounded-lg cursor-pointer">Pencatatan</li>
                <li className="menu-item text-gray-300 hover:bg-gray-700 p-3 rounded-lg cursor-pointer">Logout</li>
            </ul>
        </div>
    )
  }