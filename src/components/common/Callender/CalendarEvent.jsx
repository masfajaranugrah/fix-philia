"use client";

import React, { useState } from "react";
import useSWR from "swr";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { fetchEvents } from "@/lib/fetchData";

const fetcher = async () => {
  try {
    const data = await fetchEvents();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const CalendarEvent = () => {
  const { data: events } = useSWR("events", fetcher, {
    refreshInterval: 3000, // Refresh setiap 3 detik
 });
  const [selectedEvent, setSelectedEvent] = useState(null);
 
  if (!events)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-[#2D210A] rounded-full animate-spin"></div>
      </div>
    );
  

  const handleEventClick = (clickInfo) => {
    setSelectedEvent({
      title: clickInfo.event.title,
      start: clickInfo.event.startStr,
      end: clickInfo.event.endStr,
      description: clickInfo.event.extendedProps.description,
      url: clickInfo.event.extendedProps.url,
    });
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="container mx-auto min-h-screen z-10 p-6 md:p-6 flex bg-blur flex-col gap-6">
      <h1 className="text-[24px]  md:text-[40px] text-[#2D210A] lg:text-[40px] font-[1000] text-center">
        Kalender acara
      </h1>
      <div className="rounded-xl shadow-[8px_8px_0px_#0A2D19] bg-[#F6FFEA] p-5 md:p-4">
       
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            height="auto"
            aspectRatio={1}
            eventTextColor="white"
            eventDisplay="block"
            eventClick={handleEventClick}
            eventContent={(info) => (
              <div className="text-white bg-[#2D210A]   !border-none border-transparent font-bold text-center p-1 rounded-md">
                {info.event.title}
              </div>
            )}
            dayCellContent={(info) => (
              <div className="relative">
                <span className="text-green-900 font-bold">{info.dayNumberText}</span>
              </div>
            )}
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "today",
            }}
          />
        
      </div>

      {selectedEvent && (
        <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-[9999]">
          <div className="bg-[#F6FFEA] p-6 rounded-lg  max-w-md w-full">
            <h2 className="text-xl font-bold text-[#2D210A] mb-2">
              {selectedEvent.title}
            </h2>
            <p className="text-gray-700">{selectedEvent.description}</p>
            <p className="text-[18px] font-semibold text-[#2D210A]">
              {selectedEvent.end &&
              new Date(selectedEvent.start).toISOString().split("T")[0] !==
                new Date(selectedEvent.end).toISOString().split("T")[0]
                ? new Date(selectedEvent.start).getMonth() ===
                    new Date(selectedEvent.end).getMonth() &&
                  new Date(selectedEvent.start).getFullYear() ===
                    new Date(selectedEvent.end).getFullYear()
                  ? `${new Intl.DateTimeFormat("id-ID", {
                      day: "2-digit",
                    }).format(
                      new Date(selectedEvent.start)
                    )} - ${new Intl.DateTimeFormat("id-ID", {
                      day: "2-digit",
                    }).format(
                      new Date(selectedEvent.end)
                    )} ${new Intl.DateTimeFormat("id-ID", {
                      month: "long",
                      year: "numeric",
                    }).format(new Date(selectedEvent.end))}`
                  : `${new Intl.DateTimeFormat("id-ID", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    }).format(
                      new Date(selectedEvent.start)
                    )} - ${new Intl.DateTimeFormat("id-ID", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    }).format(new Date(selectedEvent.end))}`
                : `${new Intl.DateTimeFormat("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  }).format(new Date(selectedEvent.start))}`}
            </p>
            <p className="text-[18px] font-semibold text-[#2D210A]">
              {new Date(selectedEvent.start).toLocaleTimeString("id-ID", {
                timeZone: "Asia/Jakarta",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              }) !== "12:00 AM"
                ? new Date(selectedEvent.start).toLocaleTimeString("id-ID", {
                    timeZone: "Asia/Jakarta",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })
                : ""}

              {selectedEvent.end &&
              new Date(selectedEvent.end).toLocaleTimeString("id-ID", {
                timeZone: "Asia/Jakarta",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              }) !== "12:00 AM"
                ? ` - ${new Date(selectedEvent.end).toLocaleTimeString(
                    "id-ID",
                    {
                      timeZone: "Asia/Jakarta",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false,
                    }
                  )}`
                : ""}
            </p>

            {selectedEvent.url && (
              <a
                href={selectedEvent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-center"
              >
                Buka Link
              </a>
            )}
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg w-full"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Event List */}
      <div className="rounded-xl z-10 custom-scrollbar relative bg-[#F6FFEA] shadow-[8px_8px_0px_#0A2D19] p-4">
        <h4 className="text-lg font-extrabold text-[#2D210A] mb-4">Daftar Acara</h4>
        <div className="flex flex-col gap-4 max-h-80 custom-scrollbar overflow-y-auto">
          {events.length > 0 ? (
            events.map((event, index) => {
              const currentDate = new Date();
              const eventEndDate = new Date(event.end || event.start);
              const isEventCompleted = eventEndDate < currentDate;

              return (
                <div
                  key={index}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <div>
                    <p className="text-[18px] font-extrabold text-[#2D210A]">
                      {event.end &&
                      new Date(event.start).toISOString().split("T")[0] !==
                        new Date(event.end).toISOString().split("T")[0]
                        ? new Date(event.start).getMonth() ===
                            new Date(event.end).getMonth() &&
                          new Date(event.start).getFullYear() ===
                            new Date(event.end).getFullYear()
                          ? `${new Intl.DateTimeFormat("id-ID", {
                              day: "2-digit",
                            }).format(
                              new Date(event.start)
                            )} - ${new Intl.DateTimeFormat("id-ID", {
                              day: "2-digit",
                            }).format(
                              new Date(event.end)
                            )} ${new Intl.DateTimeFormat("id-ID", {
                              month: "long",
                              year: "numeric",
                            }).format(new Date(event.end))}`
                          : `${new Intl.DateTimeFormat("id-ID", {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            }).format(
                              new Date(event.start)
                            )} - ${new Intl.DateTimeFormat("id-ID", {
                              day: "2-digit",
                              month: "long",
                              year: "numeric",
                            }).format(new Date(event.end))}`
                        : `${new Intl.DateTimeFormat("id-ID", {
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                          }).format(new Date(event.start))}`}
                    </p>

                    <p className="text-[18px] font-semibold text-[#2D210A]">
                      {new Date(event.start).toLocaleTimeString("id-ID", {
                        timeZone: "Asia/Jakarta",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      }) !== "12:00 AM"
                        ? new Date(event.start).toLocaleTimeString("id-ID", {
                            timeZone: "Asia/Jakarta",
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: false,
                          })
                        : ""}

                      {event.end &&
                      new Date(event.end).toLocaleTimeString("id-ID", {
                        timeZone: "Asia/Jakarta",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: false,
                      }) !== "12:00 AM"
                        ? ` - ${new Date(event.end).toLocaleTimeString(
                            "id-ID",
                            {
                              timeZone: "Asia/Jakarta",
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: false,
                            }
                          )}`
                        : ""}
                    </p>

                    <p className="text-[15px] font-semibold text-[#2D210A]">
                      {event.title} <br />
                      {event.location || "Unknown Location"}
                    </p>
                  </div>
                  <button
                    className={`px-4 py-2 text-[15px] rounded-[10px] text-[#F6FFEA]  font-bold ${
                      isEventCompleted ? "bg-[#2D210A]" : "bg-[#2D210A]"
                    }`}
                  >
                    {isEventCompleted ? "Selesai" : "Berlangsung"}
                  </button>
                </div>
              );
            })
          ) : (
            <p className="text-gray-600">No events available</p>
          )}
        </div>
      </div>

  
    </div>
  );
};

export default CalendarEvent;
